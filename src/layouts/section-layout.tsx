import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLayout = ({ children, className }: SectionLayoutProps) => {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 w-full h-screen border p-10 mx-auto items-center",
        className,
      )}
    >
      {children}
    </section>
  );
};
