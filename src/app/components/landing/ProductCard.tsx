import { CheckCircle2 } from "lucide-react";

export interface Product {
  number: string;
  name: string;
  description: string;
  popular?: boolean;
  features: {
    label?: string;
    value: string;
  }[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 border ${
        product.popular
          ? "border-emerald-500/50 dark:border-emerald-500/40"
          : "border-zinc-200 dark:border-zinc-800"
      } flex flex-col justify-between ${
        product.popular
          ? "relative overflow-hidden shadow-md"
          : "hover:border-emerald-500/50 transition-all shadow-sm"
      }`}
    >
      {product.popular && (
        <span className="absolute top-3 right-3 bg-emerald-500 dark:bg-emerald-400 text-zinc-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">
          Popular
        </span>
      )}

      <div>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Línea {product.number}
        </span>

        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mt-1 mb-4">
          {product.name}
        </h3>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 italic">
          {product.description}
        </p>

        <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
          {product.features.map((feature) => (
            <li
              key={`${feature.label}-${feature.value}`}
              className="flex items-start gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />

              {feature.label && <strong>{feature.label} </strong>}

              {feature.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}