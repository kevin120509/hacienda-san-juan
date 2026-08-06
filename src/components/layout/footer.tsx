import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Intro */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">San Juan de las Flores</h3>
            <p className="text-primary-foreground/80 text-sm max-w-sm">
              Elegancia natural y exclusividad en el corazón de Yucatán. El escenario perfecto para celebraciones inolvidables.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/Haciendasanjuandelasflores"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="https://www.instagram.com/haciendasanjuandelasflores/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Explorar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/espacios" className="hover:text-accent transition-colors">Nuestros Espacios</Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-accent transition-colors">Tipos de Eventos</Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-accent transition-colors">Galería</Link>
              </li>
              <li>
                <Link href="/cotizar" className="hover:text-accent transition-colors">Cotizar Evento</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-accent" />
                <span>Calle 18 x 20,<br />Yaxkukul, Yucatán</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <span>999 265 9055</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <span>hola@sanjuanflores.demo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Hacienda San Juan de las Flores. Propuesta Demostrativa.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white">Aviso de Privacidad (Pendiente)</span>
            <span className="cursor-pointer hover:text-white">Términos y Condiciones</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
