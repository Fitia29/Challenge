import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "cn";

type CTAButtonProps = {
  message: string;
  className?: string;
};

export default function CTAButton({ message, className }: CTAButtonProps) {
  return (
    <Button variant="custom" className={cn("flex gap-[10px]  font-bold", className)}>
      <ArrowRight size={20} />
      {message}
    </Button>
  );
}
