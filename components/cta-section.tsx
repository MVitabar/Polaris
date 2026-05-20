"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, Clock, Sparkles, AlertCircle } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

type FormData = {
  name: string
  email: string
  phone?: string
  message: string
  marketingConsent: boolean
}

export function CTASection() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors }, 
    trigger, 
    setValue,
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
  })

  const valueBullets = [
    { titleKey: "cta.bullet1.title", descKey: "cta.bullet1.desc", icon: Clock },
    { titleKey: "cta.bullet2.title", descKey: "cta.bullet2.desc", icon: CheckCircle2 },
    { titleKey: "cta.bullet3.title", descKey: "cta.bullet3.desc", icon: Sparkles }
  ]

  const bullets = valueBullets
  const availability = t("cta.availability")

  const onSubmit = async (data: FormData) => {
    const trimmedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      phone: data.phone ? data.phone.trim() : '',
      marketingConsent: data.marketingConsent
    }
    
    const isNameValid = trimmedData.name.length >= 2
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)
    const isMessageValid = trimmedData.message.length >= 10
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
      if (!isNameValid) await trigger('name')
      if (!isEmailValid) await trigger('email')
      if (!isMessageValid) await trigger('message')
      return
    }
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || t("cta.form.error.general"))
      }
      
      setIsSubmitted(true)
      reset()
      
    } catch (error) {
      console.error('Error sending message:', error)
      let errorMessage = t("cta.form.error.general")
      
      if (error instanceof Error) {
        if (error.message.includes('autenticación') || error.message.includes('401')) {
          errorMessage = t("cta.form.error.auth")
        } else if (error.message.includes('certificate')) {
          errorMessage = t("cta.form.error.connection")
        }
      }
      
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="relative py-28 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto glass-card p-12 rounded-2xl border border-primary/20 shadow-2xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
              {t("cta.form.success.title")}
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-8">
              {t("cta.form.success.message")}
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="font-sans font-semibold px-8 hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                color: "var(--navy-mid)",
              }}
            >
              {t("cta.form.success.button")}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-hidden">
      <ParallaxBackground speed={0.4} className="opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Copywriting & Value Bullets */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <ScrollReveal direction="left" delay={0} duration={1000}>
              <div className="space-y-6">
                <span className="section-tag">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1 inline-block" />
                  {availability}
                </span>

                <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground leading-[1.1] tracking-tight">
                  {t("cta.form.title")}
                </h2>
                
                <p className="text-lg text-muted-foreground font-serif leading-relaxed">
                  {t("cta.form.subtitle")}
                </p>
              </div>

              {/* Value Bullets List */}
              <div className="space-y-6 mt-8">
                {bullets.map((bullet, index) => {
                  const Icon = bullet.icon
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary mt-1">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-foreground text-base">
                          {t(bullet.titleKey)}
                        </h4>
                        <p className="text-muted-foreground text-sm font-serif mt-1 leading-relaxed">
                          {t(bullet.descKey)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Premium Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={150} duration={1200}>
              <div className="glass-card p-8 md:p-10 rounded-2xl border border-primary/15 shadow-2xl relative">
                {/* Glow behind the card */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-2xl" />

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-sans font-medium text-foreground">{t("cta.form.name")}</Label>
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
                          setValue('name', e.target.value, { shouldValidate: true })
                        }}
                        className={`input-gold focus:border-primary/50 bg-background/40 border-border/80 text-foreground w-full ${
                          errors.name ? 'border-destructive focus:border-destructive' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-sans font-medium text-foreground">{t("cta.form.email")}</Label>
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
                          setValue('email', e.target.value, { shouldValidate: true })
                        }}
                        className={`input-gold focus:border-primary/50 bg-background/40 border-border/80 text-foreground w-full ${
                          errors.email ? 'border-destructive focus:border-destructive' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-sans font-medium text-foreground">{t("cta.form.phone")}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t("cta.form.phone.placeholder")}
                      {...register('phone')}
                      onChange={(e) => {
                        setValue('phone', e.target.value, { shouldValidate: true })
                      }}
                      className="input-gold focus:border-primary/50 bg-background/40 border-border/80 text-foreground w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-sans font-medium text-foreground">{t("cta.form.message")}</Label>
                    <Textarea
                      id="message"
                      placeholder={t("cta.form.message.placeholder")}
                      rows={5}
                      {...register('message', { 
                        required: t("cta.form.message.required"),
                        minLength: {
                          value: 10,
                          message: t("cta.form.message.minlength")
                        },
                        validate: (value) => value && value.trim().length >= 10 ? true : t("cta.form.message.empty")
                      })}
                      onChange={(e) => {
                        setValue('message', e.target.value, { shouldValidate: true })
                      }}
                      className={`input-gold focus:border-primary/50 bg-background/40 border-border/80 text-foreground w-full ${
                        errors.message ? 'border-destructive focus:border-destructive' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <Checkbox
                      id="marketingConsent"
                      {...register('marketingConsent', { value: false })}
                      onCheckedChange={(checked) => {
                        setValue('marketingConsent', Boolean(checked), { shouldValidate: true })
                      }}
                      className="h-4.5 w-4.5 border-border/80 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <Label htmlFor="marketingConsent" className="text-xs font-normal text-muted-foreground leading-normal cursor-pointer select-none">
                      {t("cta.form.consent")}
                    </Label>
                  </div>

                  {error && (
                    <div className="p-4 text-xs text-red-400 bg-red-500/10 border border-red-500/25 rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-sans font-bold px-8 py-6 transition-all duration-300 hover:scale-105 group"
                      style={{
                        background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                        color: "var(--navy-mid)",
                        boxShadow: "0 4px 20px var(--gold-glow)",
                      }}
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
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
