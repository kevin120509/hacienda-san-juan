"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionFadeIn } from "@/components/animations/motion-fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  eventType: z.string().min(1, "Seleccione un tipo de evento"),
  date: z.string().optional(),
  guests: z.string().min(1, "Seleccione un estimado de invitados"),
  spaces: z.string().optional(),
  name: z.string().min(2, "El nombre es requerido"),
  phone: z.string().min(10, "Ingrese un teléfono válido"),
  email: z.string().email("Correo inválido").optional().or(z.literal("")),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function CotizarPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventType: "",
      guests: "",
      spaces: "",
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["eventType"];
    if (step === 2) fieldsToValidate = ["date", "guests"];
    if (step === 3) fieldsToValidate = ["spaces"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Datos de cotización:", data);
    
    const message = `Hola, me gustaría cotizar un evento en Hacienda San Juan de las Flores.
Detalles:
- Tipo de evento: ${data.eventType}
- Fecha estimada: ${data.date || 'No definida'}
- Invitados: ${data.guests}
- Áreas de interés: ${data.spaces || 'No definido'}

Mis datos:
- Nombre: ${data.name}
- Email: ${data.email || 'No proporcionado'}
- Comentarios: ${data.comments || 'Ninguno'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '529992659055'}?text=${encodedMessage}`, "_blank");
    
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="pt-32 pb-16 bg-secondary/30">
        <Container>
          <MotionFadeIn className="max-w-3xl text-center mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Cotiza tu Evento</h1>
            <p className="text-xl text-muted-foreground">
              Cuéntenos sobre su evento soñado y diseñaremos una propuesta a su medida.
            </p>
          </MotionFadeIn>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <MotionFadeIn className="bg-white p-10 text-center border border-primary/10 shadow-sm rounded-sm">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="font-serif text-3xl font-bold mb-4 text-primary">¡Solicitud Recibida!</h2>
                <p className="text-muted-foreground mb-6">
                  Gracias por considerar a Hacienda San Juan de las Flores. Hemos recibido su información y nos pondremos en contacto muy pronto para brindarle una cotización personalizada.
                </p>
                <p className="text-xs text-muted-foreground mb-8">
                  (Modo demostración: Ningún dato real fue enviado. La integración con CRM o correo está pendiente de configuración).
                </p>
                <Button onClick={() => { setIsSubmitted(false); setStep(1); }}>
                  Nueva Cotización
                </Button>
              </MotionFadeIn>
            ) : (
              <div className="bg-white p-6 md:p-10 border border-primary/10 shadow-sm rounded-sm">
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${step >= i ? 'bg-primary text-white' : 'bg-secondary text-primary/50'}`}>
                          {i}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-1 bg-secondary w-full rounded-full relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                      style={{ width: `${((step - 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Step 1: Tipo */}
                  <div className={step === 1 ? "block" : "hidden"}>
                    <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">¿Qué tipo de evento planea?</h3>
                    <div className="space-y-4">
                      <Select {...register("eventType")}>
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="Boda">Boda</option>
                        <option value="XV Años">XV Años</option>
                        <option value="Bautizo / Primera Comunión">Bautizo / Primera Comunión</option>
                        <option value="Evento Empresarial">Evento Empresarial</option>
                        <option value="Sesión Fotográfica">Sesión Fotográfica</option>
                        <option value="Otro">Otro</option>
                      </Select>
                      {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
                    </div>
                  </div>

                  {/* Step 2: Detalles */}
                  <div className={step === 2 ? "block" : "hidden"}>
                    <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">Detalles del Evento</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Fecha Estimada (Opcional)</label>
                        <Input type="date" {...register("date")} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Número aproximado de invitados</label>
                        <Select {...register("guests")}>
                          <option value="" disabled>Seleccione una opción</option>
                          <option value="Menos de 50">Menos de 50</option>
                          <option value="50 - 150">50 - 150</option>
                          <option value="150 - 300">150 - 300</option>
                          <option value="Más de 300">Más de 300</option>
                        </Select>
                        {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Espacios */}
                  <div className={step === 3 ? "block" : "hidden"}>
                    <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">Áreas de Interés</h3>
                    <div className="space-y-4">
                      <Select {...register("spaces")}>
                        <option value="">Aún no estoy seguro / Me gustaría asesoría</option>
                        <option value="Jardín Principal">Jardín Principal</option>
                        <option value="Terraza Techada">Terraza Techada</option>
                        <option value="Área de Ceremonias">Área de Ceremonias</option>
                        <option value="Uso exclusivo de toda la hacienda">Uso exclusivo de toda la hacienda</option>
                      </Select>
                    </div>
                  </div>

                  {/* Step 4: Contacto */}
                  <div className={step === 4 ? "block" : "hidden"}>
                    <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">Sus Datos</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nombre completo *</label>
                        <Input {...register("name")} placeholder="Ej. Juan Pérez" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Teléfono (WhatsApp) *</label>
                          <Input type="tel" {...register("phone")} placeholder="10 dígitos" />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                          <Input type="email" {...register("email")} placeholder="ejemplo@correo.com" />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Comentarios adicionales</label>
                        <Textarea {...register("comments")} placeholder="¿Algún detalle especial que debamos saber?" />
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="mt-8 flex justify-between">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep}>Atrás</Button>
                    ) : (
                      <div />
                    )}
                    
                    {step < 4 ? (
                      <Button type="button" onClick={nextStep}>Siguiente Paso</Button>
                    ) : (
                      <Button type="submit">Enviar Solicitud</Button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
