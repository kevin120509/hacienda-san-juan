import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Users, Droplet, Sun, Moon } from "lucide-react";

export const metadata = {
  title: "Nuestros Espacios | Hacienda San Juan de las Flores",
  description: "Descubre los espacios elegantes y versátiles de Hacienda San Juan de las Flores para bodas y eventos en Yucatán.",
};

const espacios = [
  {
    id: "jardin-principal",
    name: "Jardín Principal",
    desc: "Un espacio abierto rodeado de vegetación madura, ideal para recepciones majestuosas bajo las estrellas.",
    capacidad: "[PENDIENTE DE VALIDAR]",
    features: [
      { icon: Sun, text: "Excelente iluminación natural" },
      { icon: Users, text: "Capacidad para grandes eventos" }
    ]
  },
  {
    id: "terraza",
    name: "Terraza Techada",
    desc: "Elegancia arquitectónica que ofrece resguardo sin perder la conexión con los jardines de la hacienda.",
    capacidad: "[PENDIENTE DE VALIDAR]",
    features: [
      { icon: Moon, text: "Ideal para cenas y baile" },
      { icon: Droplet, text: "Protección contra lluvia" }
    ]
  },
  {
    id: "capilla",
    name: "Área de Ceremonias",
    desc: "Un rincón íntimo y romántico, perfecto para jurar amor eterno en un entorno sereno.",
    capacidad: "[PENDIENTE DE VALIDAR]",
    features: [
      { icon: Users, text: "Ceremonias íntimas" }
    ]
  }
];

export default function EspaciosPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <Container>
          <MotionFadeIn className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Nuestros Espacios</h1>
            <p className="text-xl text-muted-foreground">
              Cada rincón de la hacienda está diseñado para crear una atmósfera única, adaptándose a la visión de tu evento.
            </p>
          </MotionFadeIn>
        </Container>
      </section>

      {/* Espacios List */}
      <Section>
        <Container>
          <div className="space-y-24">
            {espacios.map((espacio, i) => {
              const imgSrc = i === 0 ? "/images/hacienda_garden.png" : i === 1 ? "/images/hacienda_terrace.png" : "/images/hacienda_wedding.png";
              return (
                <div key={espacio.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <MotionFadeIn direction={i % 2 === 0 ? "right" : "left"} className={i % 2 !== 0 ? 'md:order-2' : ''}>
                    <div className="aspect-[4/3] bg-primary/10 rounded-sm relative flex items-center justify-center overflow-hidden">
                      <Image src={imgSrc} alt={espacio.name} fill className="object-cover" />
                    </div>
                  </MotionFadeIn>
                  <MotionFadeIn direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? 'md:order-1' : ''}>
                    <h2 className="font-serif text-3xl font-bold mb-4 text-primary">{espacio.name}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{espacio.desc}</p>
                    
                    <div className="mb-8 p-4 bg-secondary/20 border border-primary/10 rounded-sm">
                      <span className="block text-sm text-primary font-semibold mb-1">Capacidad Estimada</span>
                      <span className="text-muted-foreground">{espacio.capacidad}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {espacio.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center text-foreground/80">
                          <feat.icon className="mr-3 text-accent" size={20} />
                          {feat.text}
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" asChild>
                      <Link href="/cotizar">Cotizar este espacio</Link>
                    </Button>
                  </MotionFadeIn>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
