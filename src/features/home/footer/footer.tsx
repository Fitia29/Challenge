import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const navigation = ["Accueil", "Événements", "À propos", "Actualités", "Galerie", "Contact"];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-secondary text-[#DDDFE6]">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-8 lg:px-9">
        <div className="grid gap-10 pb-8 md:grid-cols-[180px_minmax(0,1fr)_250px] md:gap-8">
          <nav aria-label="Navigation du pied de page" className="text-sm">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base font-medium text-white">Suivez-nous</p>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="opacity-80 transition-opacity hover:opacity-100"><Image src="/images/facebook.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" /></a>
              <a href="#" aria-label="Instagram" className="opacity-80 transition-opacity hover:opacity-100"><Image src="/images/insta.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" /></a>
              <a href="#" aria-label="X" className="opacity-80 transition-opacity hover:opacity-100"><Image src="/images/x.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" /></a>
            </div>
          </nav>

          <section aria-labelledby="newsletter-title" className="mx-auto w-full max-w-[817px] text-center">
            <h2 id="newsletter-title" className="text-3xl font-bold leading-[1.08] text-[#DDDFE6] sm:text-4xl">
              Ne manquez aucune ouverture <span className="text-primary">de billetterie</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-relaxed text-[#DDDFE6]">
              Recevez directement par e-mail nos alertes de mise en vente, les nouveaux événements et nos offres exclusives.
            </p>
            <form className="mx-auto mt-7 flex h-16 w-full max-w-[617px] items-center rounded-full bg-[#343E66] p-1">
              <label htmlFor="footer-email" className="sr-only">Votre adresse e-mail</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Entrez votre email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-[#C0C5D5]"
              />
              <button type="button" className="h-full rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-blue-600">
                Envoyer
              </button>
            </form>
          </section>

          <section aria-labelledby="footer-contact-title" className="text-sm">
            <h2 id="footer-contact-title" className="mb-4 text-base font-medium text-white">Informations</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:contact@tikety.com" className="hover:text-white">contact@tikety.com</a></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0" /><a href="tel:+261340000000" className="hover:text-white">+261 34 00 000 00</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0" /><span>Antananarivo, Madagascar</span></li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tikety. Tous droits réservés.</p>
          <nav aria-label="Informations légales" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white">CGV</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Livraisons et retours</a>
          </nav>
        </div>
      </div>

      <div aria-label="Tikety" className="mx-auto flex max-w-[1440px] items-center justify-center gap-6 overflow-hidden px-6 pb-5 pt-1 text-[#123477]">
        <Image src="/images/logo1.svg" alt="" aria-hidden="true" width={324} height={225} className="h-28 w-auto shrink-0 opacity-30 sm:h-36 lg:h-40" />
        <span className="select-none text-[clamp(6rem,22vw,16.7rem)] font-extrabold leading-[0.85] tracking-tight">Tikety</span>
      </div>
    </footer>
  );
}