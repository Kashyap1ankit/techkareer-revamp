import Footer from "@/components/footer";
import JobOpenings from "@/components/opening";
import TalentPartners from "@/components/partners";
import Testimonals from "@/components/testimonals";
import HeroSection from "@/components/ui/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-52">
      <HeroSection />
      <Testimonals />
      <JobOpenings />
      <TalentPartners />
      <Footer />
    </div>
  );
}
