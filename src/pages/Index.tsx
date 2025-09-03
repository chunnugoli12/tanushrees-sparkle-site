import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import LetterSection from "@/components/LetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import ComplimentGenerator from "@/components/ComplimentGenerator";
import FinaleSection from "@/components/FinaleSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <LetterSection />
      <ReasonsSection />
      <ComplimentGenerator />
      <FinaleSection />
    </div>
  );
};

export default Index;
