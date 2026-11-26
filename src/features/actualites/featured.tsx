import CTAButton from "@/components/cta-button";

export default function FeaturedSection() {
  const currentDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Nairobi",
  }).format(new Date());

  return (
    <section className="bg-card px-4 py-10 sm:px-6 sm:py-14]">
      <article className="mx-auto mt-[50px] flex w-full max-w-[1200px] flex-col overflow-hidden rounded-[20px] border border-secondary/35 md:min-h-[360px] md:flex-row">
        <img
          className="h-56 w-full object-cover md:h-auto md:w-[48%] md:flex-none"
          src="/images/a_la_une.svg"
          alt="Public assistant à un concert illuminé"
        />

        <div className="flex min-w-0 flex-1 flex-col items-start p-5 sm:p-7 md:justify-center md:p-4 lg:p-5">
          <CTAButton
            className="h-5 gap-1 rounded-full border border-secondary/40 px-2 text-[10px] font-normal text-secondary shadow-none"
            message="À la une · Actualité"
            variant="customOutline"
            withArrow={false}
          />

          <h2 className="mt-3 text-2xl font-bold leading-[1.15] text-secondary sm:text-3xl lg:text-[34px]">
            Billetterie 2026 : découvrez les événements{" "}
            <span className="text-primary">
              incontournables à ne pas manquer cette saison !
            </span>
          </h2>

          <p className="mt-3 text-xs leading-[1.55] text-secondary/80 sm:text-sm">
            Concerts exclusifs, spectacles grand public, festivals et rencontres
            culturelles : la programmation de cette fin d’année s’annonce
            exceptionnelle. Consultez dès maintenant l’agenda complet, profitez
            des tarifs de lancement et réservez vos places en quelques clics
            avant que les premiers événements n’affichent complet.
          </p>

          <p className="mt-3 text-[11px] text-secondary/60">{currentDate}</p>

          <CTAButton
            className="mt-3 h-9 rounded-full bg-secondary px-4 text-[11px] font-normal text-primary-foreground hover:bg-secondary/90"
            message="Voir les tickets"
            withArrow={false}
          />
        </div>
      </article>
    </section>
  );
}
