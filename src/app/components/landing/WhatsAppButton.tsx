import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const BASE_CLASSES =
  "inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-400 dark:hover:bg-emerald-300 text-white dark:text-zinc-950 font-bold transition-all transform duration-200";

const DEFAULT_CLASSES =
  "gap-2 px-5 py-2.5 text-sm rounded-full hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20";

export function WhatsAppButton({
  href,
  children,
  className = DEFAULT_CLASSES,
  iconClassName = "w-5 h-5",
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE_CLASSES} ${className}`.trim()}
    >
      <MessageCircle className={`${iconClassName} fill-current`} />
      {children}
    </a>
  );
}