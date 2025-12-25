import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 border border-zinc-200 rounded-3xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-zinc-900/50 dark:border-zinc-800 bg-white justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        <div className="mb-2">
            {icon}
        </div>
        <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">
          {title}
        </div>
        <div className="font-normal text-zinc-500 text-sm dark:text-zinc-400 leading-snug">
          {description}
        </div>
      </div>
    </div>
  )
};
