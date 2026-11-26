import { Hero, HeroContent, HeroDescription, HeroHighlight, HeroTitle, type HeroSize } from "@/components/hero";

type PageHeroProps = {
  title: string;
  highlight: string;
  description: string;
  size?: HeroSize;
};

export default function PageHero({ title, highlight, description, size = "compact" }: PageHeroProps) {
  return (
    <Hero size={size}>
      <HeroContent>
        <HeroTitle>
          {title} <HeroHighlight>{highlight}</HeroHighlight>
        </HeroTitle>
        <HeroDescription className="mt-1">{description}</HeroDescription>
      </HeroContent>
    </Hero>
  );
}
