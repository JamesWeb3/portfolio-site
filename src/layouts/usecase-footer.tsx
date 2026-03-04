import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

interface UseCaseFooterProps {
  sector: string;
}

export default function UseCaseFooter({ sector }: UseCaseFooterProps) {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="border border-border rounded-lg p-4 bg-muted text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">{sector}</p>
      </div>
      <Link
        href="/#portfolio"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Portfolio</span>
      </Link>
    </div>
  );
}
