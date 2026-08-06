import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import Image from "next/image";

export const metadata = {
  title: "Galería | Hacienda San Juan de las Flores",
  description: "Explora la belleza y majestuosidad de Hacienda San Juan de las Flores a través de nuestra galería.",
};

export default function GaleriaPage() {
  // Array de placeholders para la galería
  const photos = Array.from({ length: 9 }).map((_, i) => i);

  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <Container>
          <MotionFadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Galería de Imágenes</h1>
            <p className="text-xl text-muted-foreground">
              Un vistazo a la magia que aguarda en cada rincón.
            </p>
          </MotionFadeIn>
        </Container>
      </section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((item, index) => {
              const images = ["/images/hacienda_wedding.png", "/images/hacienda_terrace.png", "/images/hacienda_garden.png", "/images/hacienda_hero.png"];
              const imgSrc = images[index % images.length];
              return (
                <MotionFadeIn key={item} delay={item * 0.1} className="aspect-square bg-secondary/40 relative overflow-hidden group rounded-sm">
                  <Image src={imgSrc} alt={`Galería ${item}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </MotionFadeIn>
              );
            })}
          </div>
          
          <MotionFadeIn delay={0.5} className="mt-12 text-center text-sm text-muted-foreground">
            <p>Las fotografías oficiales están pendientes de validación y autorización.</p>
          </MotionFadeIn>
        </Container>
      </Section>
    </div>
  );
}
