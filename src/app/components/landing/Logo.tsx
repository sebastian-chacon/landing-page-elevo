interface LogoProps {
    className?: string;
  }
  
  export function Logo({ className = "" }: LogoProps) {
    return (
      <span
        className={`text-2xl font-black tracking-widest text-zinc-900 dark:text-white flex items-center gap-2 group ${className}`}
      >
        <img
          src="/Logo.png"
          alt="Logo ELEVO"
          className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105 invert dark:invert-0"
        />
  
        ELEVO
  
        <span className="text-emerald-500 dark:text-emerald-400 text-3xl leading-none">
          .
        </span>
      </span>
    );
  }