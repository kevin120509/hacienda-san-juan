"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const waMessage = `Hola, me gustaría recibir más información.
Mis datos:
- Nombre: ${name}
- Teléfono: ${phone}
- Email: ${email || 'No proporcionado'}

Mensaje: ${message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '529992659055'}?text=${encodedMessage}`, "_blank");
    
    setStatus("success");
  };

  return (
    <div className="bg-background">
      <section className="pt-32 pb-16 bg-secondary/30">
        <Container>
          <MotionFadeIn className="max-w-3xl text-center mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Contacto y Ubicación</h1>
            <p className="text-xl text-muted-foreground">
              Estamos aquí para resolver cualquier duda y ayudarle a dar el primer paso hacia su evento soñado.
            </p>
          </MotionFadeIn>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <MotionFadeIn direction="right" className="space-y-10">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6 text-white">Hablemos</h2>
                <p className="text-muted-foreground mb-8">
                  Puede agendar un recorrido o consultarnos cualquier inquietud directamente a través de WhatsApp o llenando el formulario.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Teléfono / WhatsApp</h3>
                      <p className="text-muted-foreground">999 265 9055</p>
                      <p className="text-sm text-muted-foreground mt-1">Lic. Cinthia Cecilia Campos Argüelles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Ubicación del Recinto</h3>
                      <p className="text-muted-foreground">Calle 18 x 20, Yaxkukul, Yucatán.</p>
                      <a href="#" className="text-accent hover:underline text-sm mt-1 inline-block">Ver mapa de indicaciones (Pendiente)</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Oficina en Mérida</h3>
                      <p className="text-muted-foreground">Calle 19-1 #333 x 74-A y 19, Cerrada Bambús, fraccionamiento Gran Santa Fe, Caucel.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5c] text-white" asChild>
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '529992659055'}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2" size={20} />
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </MotionFadeIn>

            {/* Simple Form */}
            <MotionFadeIn direction="left">
              <div className="bg-[#121814] p-8 md:p-10 shadow-sm border border-white/10 rounded-xl">
                <h3 className="font-serif text-2xl font-bold mb-6 text-white">Envíenos un Mensaje</h3>
                {status === "success" ? (
                  <div className="bg-green-50 text-green-800 p-6 rounded-sm border border-green-200 text-center">
                    <h4 className="font-semibold text-lg mb-2">¡Mensaje enviado!</h4>
                    <p>Gracias por contactarnos. Nos comunicaremos a la brevedad.</p>
                    <p className="text-xs text-green-600 mt-4">(Modo demostración: Ningún correo real fue enviado)</p>
                    <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Enviar otro mensaje</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre completo *</label>
                      <Input id="name" name="name" required placeholder="Ej. Ana García" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Teléfono *</label>
                        <Input id="phone" name="phone" type="tel" required placeholder="10 dígitos" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
                        <Input id="email" name="email" type="email" placeholder="ejemplo@correo.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje *</label>
                      <Textarea id="message" name="message" required placeholder="¿En qué podemos ayudarle?" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full" disabled={status === "submitting"}>
                      {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                  </form>
                )}
              </div>
            </MotionFadeIn>
          </div>
        </Container>
      </Section>
    </div>
  );
}
