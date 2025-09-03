import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Heart, Sparkles } from "lucide-react";

const compliments = [
  "Your smile could light up the entire universe! ✨",
  "You have the most beautiful heart I've ever known 💕",
  "Your friendship is the greatest gift life has given me 🎁",
  "You make ordinary moments feel magical ✨",
  "Your laughter is my favorite sound in the world 🎵",
  "You're proof that angels walk among us 👼",
  "Your kindness creates ripples of joy everywhere you go 🌊",
  "You have the rare gift of making everyone feel special 💎",
  "Your friendship is like sunshine on a cloudy day ☀️",
  "You're not just my best friend, you're my chosen family 🏠",
  "Your strength inspires me to be braver every day 💪",
  "You turn the impossible into possible with your determination 🌟",
  "Your hugs have healing powers, I'm convinced! 🤗",
  "You see beauty where others see ordinary things 🌸",
  "Your loyalty is rarer than diamonds and twice as precious 💎",
  "You make the world a better place just by being in it 🌍",
  "Your dreams are as beautiful as you are 🌙",
  "You have the courage to be authentically yourself 🦋",
  "Your wisdom always comes at exactly the right moment 🕊️",
  "You're the friend everyone wishes they had 💫"
];

const ComplimentGenerator = () => {
  const [currentCompliment, setCurrentCompliment] = useState(compliments[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateCompliment = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setCurrentCompliment(compliments[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 bg-gradient-cool">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playful text-5xl md:text-6xl mb-8 text-accent">
          Compliment Generator 💝
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Need a pick-me-up? Here's a personalized compliment just for you!
        </p>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-4 left-4">
            <Heart className="text-primary opacity-20 floating-heart" size={24} />
          </div>
          <div className="absolute top-4 right-4">
            <Sparkles className="text-accent opacity-20 floating-heart-delayed" size={24} />
          </div>
          <div className="absolute bottom-4 left-6">
            <Sparkles className="text-secondary opacity-20 floating-heart" size={20} />
          </div>
          
          <div className={`min-h-[100px] flex items-center justify-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <p className="text-2xl md:text-3xl font-playful text-primary leading-relaxed">
              {currentCompliment}
            </p>
          </div>
        </div>
        
        <Button
          onClick={generateCompliment}
          size="lg"
          disabled={isAnimating}
          className="font-playful text-lg px-8 py-6 bg-gradient-warm hover:scale-105 transition-all duration-300 shadow-lift text-warm-foreground border-0 disabled:opacity-70"
        >
          {isAnimating ? (
            <RefreshCw className="mr-2 animate-spin" size={20} />
          ) : (
            <Sparkles className="mr-2" size={20} />
          )}
          {isAnimating ? 'Generating...' : 'Generate Another Compliment'}
        </Button>
      </div>
    </section>
  );
};

export default ComplimentGenerator;