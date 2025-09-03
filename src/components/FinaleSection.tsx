import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Star, Sparkles, Gift } from "lucide-react";

const surpriseMessages = [
  "You are the most incredible human being I know. Thank you for being you! 💕",
  "Our friendship is a masterpiece painted with laughter, trust, and unconditional love 🎨",
  "In a world full of temporary things, you are my forever person 🌟",
  "You don't just light up my life, you ARE the light in my life ✨",
  "Thank you for being my safe place, my adventure buddy, and my constant source of joy 🏡",
  "Distance means nothing when friendship means everything. You're always in my heart 💗"
];

const FinaleSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleSurpriseClick = () => {
    if (!showSurprise) {
      // Trigger confetti
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
      }));
      setConfetti(newConfetti);
      
      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 3000);
    }
    
    setShowSurprise(true);
    setCurrentMessage(Math.floor(Math.random() * surpriseMessages.length));
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-10 left-10 text-primary floating-heart opacity-40" size={20} />
          <Star className="absolute top-20 right-20 text-secondary floating-heart-delayed opacity-50" size={18} />
          <Sparkles className="absolute top-40 left-1/4 text-accent floating-heart opacity-35" size={22} />
          <Heart className="absolute bottom-40 right-10 text-warm floating-heart-delayed opacity-45" size={24} />
          <Star className="absolute bottom-20 left-20 text-primary-glow floating-heart opacity-40" size={16} />
          <Sparkles className="absolute top-60 right-1/3 text-secondary-glow floating-heart-delayed opacity-50" size={20} />
        </div>

        {/* Confetti Animation */}
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute pointer-events-none animate-bounce"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? (
              <Heart className="text-primary" size={16} />
            ) : (
              <Star className="text-accent" size={14} />
            )}
          </div>
        ))}

        <h2 className="font-playful text-5xl md:text-7xl mb-8 text-primary pulse-glow">
          Thank You, Tanushree
        </h2>
        
        <p className="text-2xl md:text-3xl mb-12 text-secondary font-medium leading-relaxed max-w-3xl mx-auto">
          For being the most amazing friend anyone could ask for 💙
        </p>

        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-3xl" />
          <p className="text-xl md:text-2xl font-elegant text-foreground/90 leading-relaxed relative z-10">
            "Friendship isn't about who you've known the longest. 
            It's about who walked into your life, said 'I'm here for you,' 
            and proved it every single day."
          </p>
          <p className="text-lg text-muted-foreground mt-4 font-playful relative z-10">
            And that person is YOU, Tanushree ✨
          </p>
        </div>

        {!showSurprise ? (
          <Button
            onClick={handleSurpriseClick}
            size="lg"
            className="font-playful text-xl px-10 py-8 bg-gradient-hero hover:scale-110 transition-all duration-500 shadow-glow text-primary-foreground border-0 pulse-glow"
          >
            <Gift className="mr-3 animate-pulse" size={24} />
            Click for a Surprise! 🎁
          </Button>
        ) : (
          <div className="animate-fade-in">
            <div className="glass-card rounded-2xl p-8 mb-6 bg-gradient-warm">
              <p className="text-xl font-elegant text-warm-foreground leading-relaxed">
                {surpriseMessages[currentMessage]}
              </p>
            </div>
            <Button
              onClick={handleSurpriseClick}
              variant="outline"
              size="lg"
              className="font-playful text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Sparkles className="mr-2" size={20} />
              Another Surprise!
            </Button>
          </div>
        )}

        <div className="mt-16 pt-12 border-t border-primary/20">
          <p className="font-playful text-lg text-muted-foreground">
            Made with 💕 for the most incredible friend in the universe
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinaleSection;