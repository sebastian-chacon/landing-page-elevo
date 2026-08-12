import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
}

export function TestimonialCard({
  text,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 text-sm italic leading-relaxed">
          "{text}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-zinc-900 dark:text-white font-bold text-sm">
          {name}
        </p>

        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
          {role}
        </p>
      </div>
    </div>
  );
}