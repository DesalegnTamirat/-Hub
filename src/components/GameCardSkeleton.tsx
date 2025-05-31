export default function GameCardSkeleton() {
  return (
    <div className="card w-full bg-base-100 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="relative pt-[56.25%] bg-gray-300 dark:bg-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />
      </div>

      <div className="card-body p-4 md:p-5 relative">
        {/* Rating badge placeholder */}
        <div className="absolute -top-5 right-4 w-12 h-6 rounded-full bg-gray-400 dark:bg-gray-600"></div>

        {/* Platforms placeholder */}
        <div className="flex gap-2 mb-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          ))}
        </div>

        {/* Title placeholder */}
        <div className="space-y-2 mb-3">
          <div className="h-5 w-3/4 rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-5 w-1/2 rounded bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Details placeholder */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Button placeholder */}
        <div className="h-9 w-full rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </div>
  );
}