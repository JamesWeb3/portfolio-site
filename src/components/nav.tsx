"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>
    </nav>
  );
}
