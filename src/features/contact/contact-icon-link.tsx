import Link from "next/link";
import Image from "next/image";
import { cn } from "cn";

type ContactIconLinkProps = {
  href: string;
  src: string;
  alt: string;
  className?: string;
};

export default function ContactIconLink({
  href,
  src,
  alt,
  className,
}: ContactIconLinkProps) {
  return (
    <Link href={href} className={cn("relative w-[28px] h-[28px]", className)}>
      <Image src={src} alt={alt} fill />
    </Link>
  );
}
