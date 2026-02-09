"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WorkSection() {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
  const workEntries = DATA.work;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={activeItem}
      onValueChange={setActiveItem}
    >
      <div className="relative pl-6">
        {/* Vertical timeline line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />

        <div className="grid gap-8">
          {workEntries.map((work) => (
            <AccordionItem
              key={work.company}
              value={work.company}
              className="w-full border-b-0 grid gap-2 relative"
            >
              {/* Timeline dot — highlights on active/expanded */}
              <div
                className={cn(
                  "absolute -left-6 top-1.5 size-[7px] rounded-full ring-2 ring-background z-10 transition-colors duration-200",
                  activeItem === work.company ||
                    (!activeItem && work.company === workEntries[0]?.company)
                    ? "bg-primary"
                    : "bg-muted-foreground/40"
                )}
              />

              <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                <div className="flex items-center gap-x-3 justify-between w-full text-left">
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {work.company}
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {work.start} – {work.end ?? "Present"}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0 text-xs sm:text-sm text-muted-foreground">
                {work.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </div>
    </Accordion>
  );
}
