import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tipos de Eventos | Hacienda San Juan de las Flores",
  description: "Bodas, XV años y celebraciones exclusivas en Hacienda San Juan de las Flores.",
};

const eventos = [
  {
    title: "Bodas Inolvidables",
    desc: "Su día más importante merece un escenario perfecto. Ofrecemos áreas versátiles que se adaptan desde la ceremonia religiosa o civil hasta una recepción espectacular con banquete y baile, rodeados del encanto yucateco.",
  },
  {
    title: "XV Años",
    desc: "Celebre esta tradición en un ambiente seguro, amplio y elegante. Nuestras instalaciones permiten montajes espectaculares, pistas de baile iluminadas y áreas lounge para los invitados jóvenes.",
  },
  {
    title: "Celebraciones Sociales y Empresariales",
    desc: "Aniversarios, bautizos o eventos corporativos. La exclusividad de la hacienda garantiza privacidad total para su grupo, con todas las facilidades logísticas necesarias.",
  }
];

export default function EventosPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16 bg-[#0a0e0b] text-white border-b border-white/5">
        <Container>
          <MotionFadeIn className="max-w-3xl text-center mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">El Escenario de su Historia</h1>
            <p className="text-xl text-white/80">
              Escenarios versátiles y adaptables para celebraciones de 50 hasta 800 invitados.
            </p>
          </MotionFadeIn>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventos.map((evento, i) => {
              const imgSrc = i === 0 ? "/images/hacienda_wedding.png" : i === 1 ? "/images/hacienda_terrace.png" : "/images/hacienda_garden.png";
              return (
                <MotionFadeIn key={i} delay={i * 0.2} className="flex flex-col h-full bg-[#121814] border border-white/5 p-8 shadow-sm rounded-xl">
                  <div className="mb-6 aspect-video relative overflow-hidden rounded-md">
                    <Image src={imgSrc} alt={evento.title} fill className="object-cover" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold mb-4 text-white">{evento.title}</h2>
                  <p className="text-muted-foreground mb-8 flex-grow">{evento.desc}</p>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href="/cotizar">Solicitar Cotización</Link>
                  </Button>
                </MotionFadeIn>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
