type WhyCardProps = {
  title: string;
  description: string;
};

export default function WhyCard({ title, description }: WhyCardProps) {
  return (
    <article className="flex flex-col gap-[8px] rounded-sm border-[2px] px-6 py-10 w-full sm:w-[45%] xl:w-[32%]">
      <h3 className="font-bold text-[20px] leading-[24px] text-secondary">
        {title}
      </h3>
      <p className="font-[400] text-paragraph leading-[24px] text-secondary-foreground">
        {description}
      </p>
    </article>
  );
}
