import CTAButton from "@/components/cta-button";

export default function FaqHeader() {
  return (
    <div className="flex h-full flex-col justify-between gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-[clamp(1.875rem,4.2vw,3.75rem)] font-bold uppercase leading-[1.2] text-secondary">
          Vous avez des questions ?{" "}
          <span className="text-primary">Nous avons les réponses</span>
        </h2>
        <p className="max-w-[34rem] text-sm leading-normal text-[#727C97]">
          Tout ce que vous devez savoir avant de vous lancer. Si vous ne
          trouvez pas votre réponse ici, notre équipe reste à votre écoute.
        </p>
      </div>

      <div className="flex items-start">
        <div className="flex w-full max-w-[29rem] flex-col gap-4 rounded-[20px] bg-secondary p-5">
          <span className="text-[clamp(1.125rem,1.7vw,1.5625rem)] font-bold leading-tight text-[#E5F0FF]">
            Vous avez encore de questions ?
          </span>
          <p className="max-w-[24rem] text-sm leading-snug text-[#E5F0FF]/80">
            Vous ne trouvez pas de reponse pour votre questions ? Envoyez un
            email et nous vous repondrons le plutot que possible
          </p>
          <div className="self-start">
            <CTAButton message="Nous contactez" />
          </div>
        </div>
      </div>
    </div>
  );
}
