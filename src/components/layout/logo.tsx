import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 md:gap-4" aria-label="Tikety - Accueil">
      <Image
        src="/images/logo.svg"
        alt=""
        width={58}
        height={47}
        priority
        className="h-auto w-9 md:w-[58px]"
      />
      <span className="text-2xl font-extrabold md:text-[40px]">Tikety</span>
    </Link>
  );
}
