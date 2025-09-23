"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowRight, Send } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

type FormData = {
  name: string
  email: string
  phone?: string  // Opcional en el formulario
  message: string
  marketingConsent: boolean
}

export function CTASection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors }, 
    trigger, 
    setValue, 
    watch,
    getValues
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      marketingConsent: false
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  });
  

  const formatPhoneNumber = (phone: string) => {
    // Remove all non-numeric characters
    return phone.replace(/\D/g, '');
  };

  const onSubmit = async (data: FormData) => {
    // Asegurarse de que los campos estén limpios
    const trimmedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      phone: data.phone ? data.phone.trim() : '',
      marketingConsent: data.marketingConsent
    };
    
    // Validar los datos
    const isNameValid = trimmedData.name.length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email);
    const isMessageValid = trimmedData.message.length >= 10;
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
      if (!isNameValid) await trigger('name');
      if (!isEmailValid) await trigger('email');
      if (!isMessageValid) await trigger('message');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar el formulario a la API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
      
      // Mostrar mensaje de éxito
      setIsSubmitted(true);
      reset();
      
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      let errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
      
      if (error instanceof Error) {
        if (error.message.includes('autenticación') || error.message.includes('401')) {
          errorMessage = 'Error de autenticación. Por favor, verifica la configuración del servidor de correo.';
        } else if (error.message.includes('certificate')) {
          errorMessage = 'Error de conexión segura. Por favor, inténtalo de nuevo más tarde.';
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section className="relative py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
              ¡Gracias por contactarnos!
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-8">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 overflow-hidden">
      <ParallaxBackground speed={0.4} className="opacity-20">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-2 text-center">
              Contáctanos
            </h2>
            <p className="text-muted-foreground font-serif text-center mb-8">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    {...register('name', { 
                      required: 'El nombre es requerido',
                      minLength: {
                        value: 2,
                        message: 'El nombre debe tener al menos 2 caracteres'
                      },
                      validate: (value) => value && value.trim().length > 0 ? true : 'El nombre no puede estar vacío'
                    })}
                    onChange={(e) => {
                      setValue('name', e.target.value, { shouldValidate: true });
                    }}
                    className={`${errors.name ? 'border-destructive' : ''} w-full`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    {...register('email', {
                      required: 'El correo es requerido',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Correo electrónico no válido'
                      },
                      validate: (value) => value && value.trim().length > 0 ? true : 'El correo es requerido'
                    })}
                    onChange={(e) => {
                      setValue('email', e.target.value, { shouldValidate: true });
                    }}
                    className={`${errors.email ? 'border-destructive' : ''} w-full`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono (opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  className="w-full"
                  {...register('phone')}
                  onChange={(e) => {
                    setValue('phone', e.target.value, { shouldValidate: true });
                  }}
                />
                
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={4}
                  {...register('message', { 
                    required: 'El mensaje es requerido',
                    minLength: {
                      value: 10,
                      message: 'El mensaje debe tener al menos 10 caracteres'
                    },
                    validate: (value) => value && value.trim().length >= 10 ? true : 'El mensaje debe tener al menos 10 caracteres'
                  })}
                  onChange={(e) => {
                    setValue('message', e.target.value, { shouldValidate: true });
                  }}
                  className={`${errors.message ? 'border-destructive' : ''} w-full`}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketingConsent"
                  {...register('marketingConsent', { value: false })}
                  onCheckedChange={(checked) => {
                    setValue('marketingConsent', Boolean(checked), { shouldValidate: true });
                  }}
                  className="h-4 w-4"
                />
                <Label htmlFor="marketingConsent" className="text-sm font-normal leading-none">
                  Me gustaría recibir actualizaciones y ofertas por correo electrónico o SMS
                </Label>
              </div>

              {error && (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                  {error}
                </div>
              )}
              
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-colors group"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
