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
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
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
        "row-span-1 border border-zinc-200 rounded-3xl group/bento hover:shadow-2xl hover:-translate-y-1 transition duration-500 shadow-input dark:shadow-none p-6 pb-0 dark:bg-zinc-900/50 dark:border-zinc-800 bg-white justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-1 transition duration-500">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <div className="font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {title}
            </div>
        </div>
        <div className="font-normal text-zinc-500 text-sm dark:text-zinc-400 leading-snug max-w-[240px]">
          {description}
        </div>
      </div>
      <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-t-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 border-t border-x border-zinc-100 dark:border-zinc-900">
        {header}
      </div>
    </div>
  )
};
