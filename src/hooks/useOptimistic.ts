import { useState, useCallback } from 'react';

interface OptimisticState<T> {
    data: T;
    isPending: boolean;
    error: Error | null;
}

interface UseOptimisticOptions<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
}

/**
 * Hook for optimistic UI updates
 * Immediately updates UI, then syncs with server
 * Rolls back on error
 */
export function useOptimistic<T>(
    initialData: T,
    options?: UseOptimisticOptions<T>
) {
    const [state, setState] = useState<OptimisticState<T>>({
        data: initialData,
        isPending: false,
        error: null,
    });

    const updateOptimistically = useCallback(
        async (
            optimisticData: T,
            serverUpdate: () => Promise<T>
        ) => {
            // Immediately update UI (optimistic)
            setState({
                data: optimisticData,
                isPending: true,
                error: null,
            });

            try {
                // Perform server update
                const result = await serverUpdate();

                // Update with server response
                setState({
                    data: result,
                    isPending: false,
                    error: null,
                });

                options?.onSuccess?.(result);
                return result;
            } catch (error) {
                // Rollback to initial data on error
                setState({
                    data: initialData,
                    isPending: false,
                    error: error as Error,
                });

                options?.onError?.(error as Error);
                throw error;
            }
        },
        [initialData, options]
    );

    return {
        data: state.data,
        isPending: state.isPending,
        error: state.error,
        updateOptimistically,
    };
}

/**
 * Example usage:
 * 
 * const { data, isPending, updateOptimistically } = useOptimistic(
 *   initialItems,
 *   {
 *     onSuccess: () => toast.success('Updated!'),
 *     onError: () => toast.error('Failed to update'),
 *   }
 * );
 * 
 * const handleLike = async (itemId: string) => {
 *   const optimisticItems = items.map(item =>
 *     item.id === itemId ? { ...item, liked: true } : item
 *   );
 *   
 *   await updateOptimistically(
 *     optimisticItems,
 *     () => api.likeItem(itemId)
 *   );
 * };
 */
