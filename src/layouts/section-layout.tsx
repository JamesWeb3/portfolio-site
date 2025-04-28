interface SectionLayoutProps {
    children: React.ReactNode;
  }
  
  export const SectionLayout = ({ children }: SectionLayoutProps) => {
    return (
      <section className="flex flex-col gap-4 w-full h-screen border p-10">
        {children}
      </section>
    );
  };
  