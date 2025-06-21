import { cn } from "@/features/shared/utils/cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-gray-400/60 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
