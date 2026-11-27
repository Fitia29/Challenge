import { cn } from "cn";

type TitleBadgeProps = {
  label: string;
  className?: string;
};

export default function TitleBadge({ label, className }: TitleBadgeProps) {
  return (
    <div
      className={cn(
        "border-[0.5px] py-[4px] px-[10px] border-secondary rounded-(--radius) text-[10px]",
        className,
      )}
    >
      {label}
    </div>
  );
}
