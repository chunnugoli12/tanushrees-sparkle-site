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

I don’t even know where to begin — you’re honestly one of the cutest people I’ve ever met 💙. Your smile, your expressions, even the way you talk… it all makes everything feel lighter and happier.

And your voice… oh my god, it’s the kind of voice that can instantly cheer me up no matter what mood I’m in 🎶. Soft, sweet, and honestly just too cute to handle.

But it’s not just that — you’re also one of the kindest people I know. You care so much about the people around you, and I’m so grateful to be on the receiving end of that kindness.

(And yes… I can’t forget to mention your slim figure and that big forehead of yours 😏😂. Don’t worry, it’s one of the things that makes you, you, and I wouldn’t change it for the world!)

At the end of the day, I just want to say I’m really, really happy to have you in my life. You’re my best friend, my partner in laughter, my safe place, and one of the most special people I’ll ever know.

Thank you for being you. 💫

With love & endless appreciation`;

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
