type HistoryDescriptionCardProps = {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
};

export default function HistoryDescriptionCard({
  icon,
  paragraph,
  title,
}: HistoryDescriptionCardProps) {
  return (
    <article className="flex flex-col gap-[17px] ">
      <div className="w-[53px] h-[53px] rounded-full bg-primary p-[15px] flex items-center justify-center">
        {icon}
      </div>

      <div className="flex flex-col gap-[8px] ">
        <h3 className="font-bold text-[20px] text-primary">{title}</h3>

        <p className="font-light text-[14px] text-secondary-foreground">
          {paragraph}
        </p>
      </div>
    </article>
  );
}
