"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  description: string;
  oneLiner: string;
  status: "LIVE" | "BUILDING" | "OPEN SOURCE";
  tags: readonly string[];
  repo?: string;
  className?: string;
}

const statusStyles = {
  LIVE: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
  BUILDING:
    "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
  "OPEN SOURCE":
    "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400",
} as const;

export function ProjectCard({
  title,
  href,
  description,
  oneLiner,
  status,
  tags,
  repo,
  className,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col h-full rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 flex-none">
          <span
            className={cn(
              "status-badge rounded-full px-2.5 py-0.5",
              statusStyles[status]
            )}
          >
            {status}
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {oneLiner}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] font-medium border border-border rounded-full px-2.5 py-0.5 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
