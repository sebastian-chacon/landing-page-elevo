interface ProcessCardProps {
    number: string;
    title: string;
    description: string;
  }
  
  export function ProcessCard({
    number,
    title,
    description,
  }: ProcessCardProps) {
    return (
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 relative shadow-sm">
        <span className="text-4xl font-black text-emerald-500/20 dark:text-emerald-400/20 absolute top-4 right-4">
          {number}
        </span>
  
        <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
          {title}
        </h4>
  
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    );
  }