import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4" aria-label="Tikety - Accueil">
      <Image src="/images/logo.svg" alt="" width={58} height={47} priority />
      <span className="text-[40px] font-extrabold">Tikety</span>
    </Link>
  );
}
