import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "cn";

type CTAButtonProps = {
  message: string;
  variant?: "custom" | "customOutline";
  withArrow?: boolean;
  className?: string;
};

export default function CTAButton({
  message,
  variant = "custom",
  withArrow = true,
  className,
}: CTAButtonProps) {
  return (
    <Button variant={variant} className={cn("flex gap-[10px]", className)}>
      {withArrow && <ArrowRight size={20} />}
      {message}
    </Button>
  );
}
