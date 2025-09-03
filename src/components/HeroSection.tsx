import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-primary floating-heart opacity-60" size={24} />
        <Heart className="absolute top-40 right-20 text-secondary floating-heart-delayed opacity-50" size={20} />
        <Star className="absolute top-60 left-1/4 text-accent floating-heart opacity-40" size={18} />
        <Heart className="absolute bottom-40 right-10 text-warm floating-heart-delayed opacity-55" size={26} />
        <Star className="absolute bottom-20 left-20 text-primary-glow floating-heart opacity-45" size={22} />
        <Heart className="absolute top-32 right-1/3 text-secondary-glow floating-heart opacity-35" size={16} />
        <Star className="absolute bottom-60 right-1/4 text-accent-glow floating-heart-delayed opacity-50" size={20} />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="font-playful text-6xl md:text-8xl mb-6 text-secondary pulse-glow">
          To My Friend
        </h1>
        <h2 className="font-playful text-4xl md:text-6xl mb-8 text-secondary">
          Tanushree 💫
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
          Thank you for being present in my life, the laughter in my days, 
          and the most incredible friend anyone could ask for.
        </p>

        <Button 
          size="lg" 
          className="font-playful text-lg px-8 py-6 bg-gradient-warm hover:scale-105 transition-transform duration-300 shadow-lift text-warm-foreground border-0"
        >
          Let's Celebrate Our Friendship! ✨
        </Button>
      </div>

      {/* Decorative Stars Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <Star 
            key={i}
            className={`absolute text-accent sparkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
            size={8 + Math.random() * 8}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
