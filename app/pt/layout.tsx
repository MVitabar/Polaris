import { LanguageProvider } from "@/contexts/language-context"
import { HtmlLangProvider } from "@/components/html-lang-provider"

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider initialLanguage="pt">
      <HtmlLangProvider />
      {children}
    </LanguageProvider>
  )
}
