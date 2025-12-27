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
        "row-span-1 border border-[var(--card-border)] rounded-3xl group/bento hover:shadow-2xl hover:shadow-amber-500/5 dark:hover:shadow-amber-400/5 hover:-translate-y-1.5 transition-all duration-500 ease-out shadow-sm dark:shadow-none p-6 pb-0 bg-[var(--card-background)] justify-between flex flex-col space-y-4 overflow-hidden gpu-accelerated isolation-auto relative",
        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:bg-gradient-to-br before:from-amber-500/5 before:via-transparent before:to-teal-500/5 before:rounded-3xl before:pointer-events-none",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-1 transition duration-500 relative z-10">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <div className="font-bold text-[var(--card-foreground)] tracking-tight">
              {title}
            </div>
        </div>
        <div className="font-normal text-[var(--card-muted)] text-sm leading-snug max-w-[240px]">
          {description}
        </div>
      </div>
      <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-t-2xl overflow-hidden bg-[var(--card-inner-background)] border-t border-x border-[var(--card-border)] relative z-10">
        {header}
      </div>
    </div>
  )
};
