import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import { ArrowRight, MapPin, CheckCircle, Star, StarHalf } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image 
          src="/images/hacienda_hero.png" 
          alt="Hacienda San Juan de las Flores" 
          fill 
          priority 
          className="object-cover absolute inset-0 z-0" 
        />
        
        <Container className="relative z-20 text-center text-white">
          <MotionFadeIn direction="up">
            <span className="uppercase tracking-widest text-xs md:text-sm mb-4 block text-accent">Yaxkukul, Yucatán</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Elegancia Natural para Momentos Inolvidables
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Hacienda San Juan de las Flores. El escenario perfecto donde la historia, la naturaleza y la exclusividad se encuentran.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto text-base">
                <Link href="/cotizar">Cotiza tu Evento</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/contacto">Agenda un Recorrido</Link>
              </Button>
            </div>
          </MotionFadeIn>
        </Container>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Una hacienda preciosa, ideal para bautizos, primeras comuniones y bodas.", time: "Hace un año" },
              { text: "Excelente lugar, muy amplio y muy bonito.", time: "Hace 2 años" },
              { text: "Excelente y Hermoso Lugar", time: "Hace 6 años" }
            ].map((review, i) => (
              <MotionFadeIn key={i} delay={i * 0.1} direction="up" className="bg-background p-8 rounded-xl shadow-sm border border-secondary/50 flex flex-col justify-between">
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
              </MotionFadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust & Location CTA */}
      <Section className="bg-primary text-primary-foreground relative overflow-hidden">
        <Container className="relative z-10">
          <MotionFadeIn direction="up" className="max-w-3xl mx-auto text-center">
            <MapPin className="mx-auto h-12 w-12 mb-6 text-accent" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ven a Conocer la Hacienda</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              La mejor manera de visualizar su evento es recorriendo nuestros espacios en persona. Agende una visita guiada y descubra la magia de San Juan de las Flores en Yaxkukul.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '529992659055'}`} target="_blank" rel="noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </MotionFadeIn>
        </Container>
      </Section>
    </>
  );
}
