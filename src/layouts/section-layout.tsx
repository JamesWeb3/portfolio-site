import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  id: string
}

export const SectionLayout = ({ children, className, id }: SectionLayoutProps) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col gap-4 w-full h-screen border p-10 mx-auto items-center justify-center sm:px-10 px-4",
        className
      )}
    >
      {children}
    </section>
  );
};
