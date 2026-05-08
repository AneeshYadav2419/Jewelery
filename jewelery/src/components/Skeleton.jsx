const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`}></div>
  );
};

export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full aspect-[4/5] rounded-2xl" />
      <div className="space-y-2 px-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};

export default Skeleton;
