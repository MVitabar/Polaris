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
        throw new Error(result.error || t("cta.form.error.general"));
      }
      
      // Mostrar mensaje de éxito
      setIsSubmitted(true);
      reset();
      
    } catch (error) {
      console.error('Error sending message:', error);
      let errorMessage = t("cta.form.error.general");
      
      if (error instanceof Error) {
        if (error.message.includes('autenticación') || error.message.includes('401')) {
          errorMessage = t("cta.form.error.auth");
        } else if (error.message.includes('certificate')) {
          errorMessage = t("cta.form.error.connection");
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
              {t("cta.form.success.title")}
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-8">
              {t("cta.form.success.message")}
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              {t("cta.form.success.button")}
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
              {t("cta.form.title")}
            </h2>
            <p className="text-muted-foreground font-serif text-center mb-8">
              {t("cta.form.subtitle")}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("cta.form.name")}</Label>
                  <Input
                    id="name"
                    placeholder={t("cta.form.name.placeholder")}
                    {...register('name', { 
                      required: t("cta.form.name.required"),
                      minLength: {
                        value: 2,
                        message: t("cta.form.name.minlength")
                      },
                      validate: (value) => value && value.trim().length > 0 ? true : t("cta.form.name.empty")
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
                  <Label htmlFor="email">{t("cta.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("cta.form.email.placeholder")}
                    {...register('email', {
                      required: t("cta.form.email.required"),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("cta.form.email.invalid")
                      },
                      validate: (value) => value && value.trim().length > 0 ? true : t("cta.form.email.empty")
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
                <Label htmlFor="phone">{t("cta.form.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("cta.form.phone.placeholder")}
                  className="w-full"
                  {...register('phone')}
                  onChange={(e) => {
                    setValue('phone', e.target.value, { shouldValidate: true });
                  }}
                />
                
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("cta.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("cta.form.message.placeholder")}
                  rows={4}
                  {...register('message', { 
                    required: t("cta.form.message.required"),
                    minLength: {
                      value: 10,
                      message: t("cta.form.message.minlength")
                    },
                    validate: (value) => value && value.trim().length >= 10 ? true : t("cta.form.message.empty")
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
                  {t("cta.form.consent")}
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
                    t("cta.form.submitting")
                  ) : (
                    <>
                      {t("cta.form.submit")}
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
