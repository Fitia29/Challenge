import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type CTAButtonProps = {
  message: string;
  variant?: "custom" | "customOutline";
  withArrow?: boolean;
};

export default function CTAButton({
  message,
  variant = "custom",
  withArrow = true,
}: CTAButtonProps) {
  return (
    <Button variant={variant} className="flex gap-[10px]">
      {withArrow && <ArrowRight size={20} />}
      {message}
    </Button>
  );
}