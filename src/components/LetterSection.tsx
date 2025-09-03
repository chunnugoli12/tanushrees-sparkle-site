import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const LetterSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('letter-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const letterText = `Dear Tanushree,

Where do I even begin? You are not just my best friend – you are my chosen family, my partner in crime, and the person who makes every ordinary day feel extraordinary.

Your kindness radiates like sunshine, warming everyone around you. Your humor has gotten me through the darkest days, and your loyalty is unwavering. You have this incredible gift of making people feel seen, heard, and loved.

I am so grateful for every laugh we've shared, every adventure we've embarked on, and every moment you've stood by my side. You are truly one of a kind, and I feel so lucky to call you my best friend.

Thank you for being exactly who you are – beautiful, brilliant, and absolutely amazing.

With all my love,
Your Forever Friend 💙`;

  return (
    <section id="letter-section" className="py-20 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playful text-5xl md:text-6xl text-center mb-16 text-secondary">
          A Letter Just for You 💌
        </h2>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-6 right-6">
            <Heart className="text-primary opacity-20" size={32} />
          </div>
          
          <div className={`font-elegant text-lg md:text-xl leading-relaxed text-foreground/90 ${isVisible ? 'typewriter' : 'opacity-0'}`}>
            <pre className="whitespace-pre-wrap font-elegant">
              {isVisible ? letterText : ''}
            </pre>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-6 left-6 flex space-x-2">
            <Heart className="text-primary opacity-30 floating-heart" size={16} />
            <Heart className="text-secondary opacity-30 floating-heart-delayed" size={14} />
            <Heart className="text-accent opacity-30 floating-heart" size={18} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;