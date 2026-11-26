import { cn } from "cn";

type CustomDescriptionCardProps = {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  className?: string;
  color?: "primary" | "secondary";
};

export default function CustomDescriptionCard({
  icon,
  paragraph,
  title,
  className,
  color = "primary",
}: CustomDescriptionCardProps) {
  return (
    <article className={cn("flex flex-col gap-[17px]", className)}>
      <div
        className={cn(
          "w-[53px] h-[53px] rounded-full  p-[15px] flex items-center justify-center",
          color === "primary" ? "bg-primary" : "bg-secondary",
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-[8px] ">
        <h3
          className={cn(
            "font-bold text-[20px]",
            color === "primary" ? "text-primary" : "text-secondary",
          )}
        >
          {title}
        </h3>

        <p className="font-light text-[14px] text-secondary-foreground">
          {paragraph}
        </p>
      </div>
    </article>
  );
}
