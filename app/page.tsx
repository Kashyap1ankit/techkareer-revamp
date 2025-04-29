import Testimonals from "@/components/testimonals";
import HeroSection from "@/components/ui/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-52">
      <HeroSection />
      <Testimonals />
    </div>
  );
}
