import { cn } from "cn";

type CustomSubtitleProps = {
  title: string;
  span: string;
  className?: string;
};

export default function CustomSubtitle({
  title,
  span,
  className,
}: CustomSubtitleProps) {
  return (
    <h2
      className={cn(
        " uppercase leading-[60px] text-secondary text-title font-bold",
        className,
      )}
    >
      {title} <span className="text-primary">{span}</span>
    </h2>
  );
}
