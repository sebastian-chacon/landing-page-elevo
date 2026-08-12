interface SectionHeaderProps {
    eyebrow: string;
    title: string;
  }
  
  export function SectionHeader({
    eyebrow,
    title,
  }: SectionHeaderProps) {
    return (
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">
          {eyebrow}
        </h2>
  
        <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-tight">
          {title}
        </p>
      </div>
    );
  }