type ContactLineProps = {
  icon: React.ReactNode;
  label: string;
};

export default function ContactLine({ icon, label }: ContactLineProps) {
  return (
    <div className="flex gap-[10px]">
      {icon}
      <p className="text-secondary-foreground text-paragraph leading-[24px] ">
        {label}
      </p>
    </div>
  );
}
