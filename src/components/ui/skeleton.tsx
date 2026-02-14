import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

// Card skeleton for portfolio/blog items
const CardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-border/50 overflow-hidden">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
};

// Section skeleton for full sections
const SectionSkeleton = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </section>
  );
};

// Hero skeleton
const HeroSkeleton = () => {
  return (
    <section className="relative min-h-screen bg-secondary pt-24 lg:pt-32">
      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/6" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          <div className="relative">
            <Skeleton className="h-96 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skeleton, CardSkeleton, SectionSkeleton, HeroSkeleton };
