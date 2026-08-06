"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/espacios", label: "Espacios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/galeria", label: "Galería" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-primary/10 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-primary transition-colors hover:text-primary/80"
        >
          San Juan de las Flores
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild className="hidden lg:inline-flex">
              <Link href="/contacto">Contacto</Link>
            </Button>
            <Button asChild>
              <Link href="/cotizar">Cotizar Evento</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-primary/10 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4 p-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="text-lg font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="w-full mt-4">
              <Link href="/cotizar" onClick={() => setIsOpen(false)}>
                Cotizar Evento
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
