"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { ThemeToggle } from "@/app/components/ThemeToggle";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

interface NavbarProps {
  whatsappUrl: string;
}

const navItems = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Condiciones",
    href: "#condiciones",
  },
  {
    label: "Líneas de Producto",
    href: "#catalogo",
  },
  {
    label: "Proceso",
    href: "#proceso",
  },
  {
    label: "Reseñas",
    href: "#resenas",
  },
];

export function Navbar({ whatsappUrl }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600 dark:text-zinc-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <WhatsAppButton href={whatsappUrl}>
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
            >
              {item.label}
            </a>
          ))}

          <WhatsAppButton
            href={whatsappUrl}
            iconClassName="w-5 h-5"
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 dark:bg-emerald-400 text-zinc-950 font-bold px-5 py-3 rounded-xl"
          >
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </header>
  );
}
