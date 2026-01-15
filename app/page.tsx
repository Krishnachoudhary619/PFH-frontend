import { HeroSection } from "@/features/home/components/HeroSection";
import { CategoryGrid } from "@/features/home/components/CategoryGrid";
import { HowItWorks } from "@/features/home/components/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
       <HowItWorks />
    </>
  );
}
