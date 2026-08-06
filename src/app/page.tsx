import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import { ArrowRight, MapPin, CheckCircle, Star, StarHalf } from "lucide-react";
import { CinematicHero } from "@/components/ui/cinematic-hero";

export default function Home() {
  return (
    <>
      <CinematicHero />

      {/* Intro Concept */}
      <Section className="bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <MotionFadeIn direction="right">
              <div className="aspect-[4/5] bg-primary/10 rounded-t-full relative overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/hacienda_garden.png" 
                  alt="Jardines de la Hacienda" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </MotionFadeIn>
            <MotionFadeIn direction="left">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-primary">
                Un Refugio de Exclusividad en Yucatán
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Nuestros espacios han sido diseñados para crear experiencias inmersivas. Rodeada de exuberante vegetación y detalles arquitectónicos atemporales, Hacienda San Juan de las Flores ofrece la privacidad y elegancia que su evento merece.
              </p>
              <ul className="space-y-4 mb-8">
                {['Locación Privada Exclusiva', 'Amplios Jardines y Terrazas', 'Servicio Personalizado', 'A minutos de Mérida'].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground/80">
                    <CheckCircle className="text-accent mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="p-0 text-primary text-base" asChild>
                <Link href="/espacios" className="flex items-center group">
                  Conoce nuestros espacios 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MotionFadeIn>
          </div>
        </Container>
      </Section>

      {/* Event Types Preview */}
      <Section>
        <Container>
          <MotionFadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-primary">Celebra con Nosotros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Adaptamos nuestros espacios para hacer realidad su visión, desde bodas íntimas hasta grandes recepciones.
            </p>
          </MotionFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bodas", img: "/images/hacienda_wedding.png", desc: "El romance se respira en cada rincón. Escenarios perfectos para su ceremonia y recepción." },
              { title: "XV Años", img: "/images/hacienda_terrace.png", desc: "Espacios amplios y seguros para una celebración juvenil inolvidable y llena de magia." },
              { title: "Eventos Especiales", img: "/images/hacienda_garden.png", desc: "Celebraciones sociales, empresariales y producciones con todas las facilidades necesarias." }
            ].map((event, i) => (
              <MotionFadeIn key={i} delay={i * 0.1} direction="up" className="group cursor-pointer">
                <div className="aspect-[3/4] bg-secondary/50 mb-6 overflow-hidden relative flex items-center justify-center transition-all group-hover:bg-primary/10 rounded-sm">
                   <Image src={event.img} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-primary">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.desc}</p>
              </MotionFadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Google Maps Testimonials */}
      <Section className="bg-secondary/20">
        <Container>
          <MotionFadeIn className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex text-yellow-500">
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <StarHalf className="fill-current w-6 h-6" />
              </div>
              <span className="font-bold text-2xl text-primary">4.4</span>
              <span className="text-muted-foreground ml-1">/ 5 (11 reseñas en Google Maps)</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">Experiencias de nuestros visitantes</h2>
          </MotionFadeIn>

          <div className="relative overflow-hidden w-full py-4 before:absolute before:left-0 before:top-0 before:w-12 md:before:w-24 before:h-full before:bg-gradient-to-r before:from-[#F9F8F6] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-12 md:after:w-24 after:h-full after:bg-gradient-to-l after:from-[#F9F8F6] after:to-transparent after:z-10">
            <div className="animate-marquee gap-6 md:gap-8 px-4">
              {[
                { text: "Una hacienda preciosa, ideal para bautizos, primeras comuniones y bodas.", time: "Hace un año" },
                { text: "Excelente lugar, muy amplio y muy bonito.", time: "Hace 2 años" },
                { text: "Excelente y Hermoso Lugar", time: "Hace 6 años" },
                { text: "Una hacienda preciosa, ideal para bautizos, primeras comuniones y bodas.", time: "Hace un año" },
                { text: "Excelente lugar, muy amplio y muy bonito.", time: "Hace 2 años" },
                { text: "Excelente y Hermoso Lugar", time: "Hace 6 años" }
              ].map((review, i) => (
                <div key={i} className="w-[300px] md:w-[400px] shrink-0 bg-background p-6 md:p-8 rounded-xl shadow-sm border border-secondary/50 flex flex-col justify-between whitespace-normal">
                  <div>
                    <div className="flex text-yellow-500 mb-4 gap-1">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="fill-current w-4 h-4" />)}
                    </div>
                    <p className="text-foreground/80 text-lg mb-6 leading-relaxed">"{review.text}"</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                    <span className="text-sm font-semibold text-primary">Reseña de Google</span>
                    <span className="text-xs text-muted-foreground">{review.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Location Section */}
      <Section className="bg-primary text-primary-foreground relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Address & CTA */}
            <MotionFadeIn direction="right">
              <MapPin className="h-12 w-12 mb-6 text-accent" />
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ubicación</h2>
              <div className="text-primary-foreground/80 text-lg mb-8 space-y-4">
                <p>
                  <strong>Hacienda San Juan de las Flores</strong><br />
                  Calle 18 x 20,<br />
                  Yaxkukul, Yucatán.
                </p>
                <p>
                  La mejor manera de visualizar su evento es recorriendo nuestros espacios en persona. Agende una visita guiada y descubra la magia de nuestro recinto.
                </p>
              </div>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '529992659055'}?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20guiada%20a%20la%20hacienda`} target="_blank" rel="noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </MotionFadeIn>

            {/* Right: Map */}
            <MotionFadeIn direction="left" className="h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-primary-foreground/10 bg-secondary/10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.139184929924!2d-89.42252507238666!3d21.069882517806313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567f9544684fcd%3A0xa8e3d2c6799c75c8!2sSan%20Juan%20de%20las%20Flores!5e0!3m2!1ses-419!2smx!4v1785998967114!5m2!1ses-419!2smx" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </MotionFadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
