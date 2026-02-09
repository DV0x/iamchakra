import Link from "next/link";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  return (
    <div className="rounded-2xl bg-muted/50 border border-border p-10 sm:p-14">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Let&apos;s build something.
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I&apos;m open to remote product roles (US time zones), freelance AI
          product work, and interesting collaboration. If you&apos;re exploring
          AI automation or want to ship agent-powered workflows — I&apos;d love
          to chat.
        </p>
        <Link
          href="mailto:chakra5027@gmail.com"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#C2410C] dark:hover:bg-[#FB923C]"
        >
          Get in touch
        </Link>
        <div className="flex items-center gap-4 pt-2">
          <Link
            href="mailto:chakra5027@gmail.com"
            aria-label="Email"
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            <Icons.email className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chakradhar-dhulipalla/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            <Icons.linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/DV0x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            <Icons.github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
