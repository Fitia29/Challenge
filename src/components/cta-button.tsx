import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type CTAButtonProps = {
    message: string;
}

export default function CTAButton ({message}: CTAButtonProps)  {
    return (
        <Button variant="custom" className={"flex gap-[10px] "}>
            <ArrowRight size={20} />
            {message}

        </Button>
    )

  };