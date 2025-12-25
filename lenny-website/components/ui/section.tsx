import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full py-24 md:py-32 px-4 md:px-6",
        "max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}
