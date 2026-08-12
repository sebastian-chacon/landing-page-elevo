import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 hover:border-emerald-500/40 transition-all shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}