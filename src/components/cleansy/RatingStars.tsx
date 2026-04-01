import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
    rating: number;
    maxRating?: number;
    size?: number;
    className?: string;
}

export default function RatingStars({
    rating,
    maxRating = 5,
    size = 16,
    className = ''
}: RatingStarsProps) {
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {Array.from({ length: maxRating }).map((_, index) => (
                <Star
                    key={index}
                    size={size}
                    className={`${index < rating
                        ? 'fill-rating text-rating'
                        : 'fill-none text-gray-300'
                        }`}
                />
            ))}
        </div>
    );
}
