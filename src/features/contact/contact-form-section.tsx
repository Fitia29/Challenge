import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";
import ContactLine from "./contact-line";
import ContactIconLink from "./contact-icon-link";

const CONTACT_DATA = [
  {
    icon: <Mail color="var(--secondary-foreground)" />,
    label: "contact@tikety.com",
  },
  {
    icon: <Phone color="var(--secondary-foreground)" />,
    label: "+261 34 00 000 00",
  },
  {
    icon: <MapPin color="var(--secondary-foreground)" />,
    label: "Antananarivo, Madagascar",
  },
];

const SOCIAL_MEDIA = [
  {
    src: "/contact-facebook.png",
    alt: "facebook icon",
    href: "#",
  },
  {
    src: "/contact-instagram.png",
    alt: "instagram icon",
    href: "#",
  },
  {
    src: "/contact-x.png",
    alt: "x icon",
    href: "#",
  },
];

export default function ContactFormSection() {
  return (
    <section className="flex w-full justify-center h-[527px] rounded-[24px]">
      <div className="w-[40%]">
        <div className="bg-[#DDDFE680]/50 p-[20px] opacity-[50%] rounded-tl-[24px] h-[50%] flex flex-col gap-[16px] border-[0.2px]">
          {CONTACT_DATA.map((contact, index) => (
            <ContactLine
              key={index}
              icon={contact.icon}
              label={contact.label}
            />
          ))}
        </div>

        <div className="bg-[#DDDFE680]/50 h-[50%] p-[20px] rounded-bl-[24px] opacity-[50%] border-[0.2px] flex flex-col gap-[16px]">
          <p className="text-secondary-foreground text-paragraph leading-[24px]">
            {"Suivez-nous sur"}
          </p>
          <div className="flex gap-4">
            {SOCIAL_MEDIA.map((social, index) => (
              <ContactIconLink
                key={index}
                href={social.href}
                src={social.src}
                alt={social.alt}
              />
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
