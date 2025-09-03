import { useState } from "react";
import { Sparkles, Heart, Star, Smile } from "lucide-react";

const reasons = [
  {
    id: 1,
    front: "Your Kindness",
    back: "You have the most beautiful soul. You see the good in everyone and make the world a brighter place just by being in it.",
    icon: Heart,
    color: "primary"
  },
  {
    id: 2,
    front: "Your Humor",
    back: "Your laugh is contagious and your jokes never fail to make me smile. You turn ordinary moments into treasured memories.",
    icon: Smile,
    color: "secondary"
  },
  {
    id: 3,
    front: "Your Loyalty",
    back: "Through every season of life, you've been my constant. Your friendship is a gift I treasure more than words can express.",
    icon: Star,
    color: "accent"
  },
  {
    id: 4,
    front: "Your Creativity",
    back: "You see magic where others see ordinary. Your creative spirit inspires me to dream bigger and think outside the box.",
    icon: Sparkles,
    color: "warm"
  },
  {
    id: 5,
    front: "Your Strength",
    back: "You face challenges with grace and courage. Your resilience shows me what it means to be truly strong.",
    icon: Heart,
    color: "primary"
  },
  {
    id: 6,
    front: "Your Support",
    back: "You believe in me even when I don't believe in myself. Your encouragement has helped me become who I am today.",
    icon: Star,
    color: "secondary"
  },
  {
    id: 7,
    front: "Your Adventure Spirit",
    back: "Life is never boring with you around! You turn the simplest plans into epic adventures I'll never forget.",
    icon: Sparkles,
    color: "accent"
  },
  {
    id: 8,
    front: "Your Wisdom",
    back: "You always know the right thing to say. Your advice comes from the heart and your insights are pure gold.",
    icon: Star,
    color: "warm"
  },
  {
    id: 9,
    front: "Your Authenticity",
    back: "You're genuinely, beautifully yourself in every moment. Your authenticity gives others permission to be real too.",
    icon: Heart,
    color: "primary"
  },
  {
    id: 10,
    front: "Your Heart",
    back: "Simply put, you have the biggest, most beautiful heart. Thank you for sharing it with me. I love you, bestie! 💕",
    icon: Heart,
    color: "secondary"
  }
];

const ReasonsSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playful text-5xl md:text-6xl text-center mb-4 text-primary">
          10 Reasons Why You're Amazing ✨
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16 font-medium">
          Click each card to reveal why you're so special!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            const isFlipped = flippedCards.has(reason.id);
            
            return (
              <div
                key={reason.id}
                className="relative h-64 cursor-pointer"
                onClick={() => handleCardClick(reason.id)}
              >
                <div className={`absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className={`absolute inset-0 glass-card rounded-2xl p-6 backface-hidden flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300`}>
                    <div className={`p-4 rounded-full bg-${reason.color} text-${reason.color}-foreground mb-4`}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="font-playful text-xl text-primary mb-2">
                      {reason.front}
                    </h3>
                    <p className="text-sm text-muted-foreground">Click to reveal!</p>
                  </div>
                  
                  {/* Back */}
                  <div className={`absolute inset-0 glass-card rounded-2xl p-6 backface-hidden rotate-y-180 flex flex-col justify-center text-center bg-gradient-${reason.color === 'primary' ? 'warm' : reason.color === 'secondary' ? 'cool' : 'warm'}`}>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {reason.back}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ReasonsSection;