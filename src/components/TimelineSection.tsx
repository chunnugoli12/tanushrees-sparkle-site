import { Calendar, Heart, MapPin } from "lucide-react";

const memories = [
  {
    id: 1,
    title: "The Day I Added U On Snapchat",
    date: "The Beginning",
    description: "Back then, I didn’t realize I was about to meet someone who’d mean so much to me.",
    icon: Heart,
    color: "primary"
  },
  {
    id: 2,
    title: "The First Time I Texted You There",
    date: "Early Days",
    description: "I still remember typing out that first message, not knowing if you’d even reply… 👀",
    icon: MapPin,
    color: "secondary"
  },
  {
    id: 3,
    title: "The First Call",
    date: "Always",
    description: "I was nervous at first, wondering if it’d be awkward… but the moment I heard your voice, it felt like I’d known you forever.",
    icon: Heart,
    color: "accent"
  },
  {
    id: 4,
    title: "The Reels Era",
    date: "Forever",
    description: "From cute animals to random memes, sharing reels became our daily ritual 🐒✨",
    icon: Heart,
    color: "warm"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playful text-5xl md:text-6xl text-center mb-16 text-primary">
          Our Friendship Journey 💕
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />
          
          <div className="space-y-16">
            {memories.map((memory, index) => {
              const IconComponent = memory.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={memory.id} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <div className="glass-card rounded-2xl p-8 group cursor-pointer">
                      <div className={`flex items-center mb-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`p-3 rounded-full bg-${memory.color} text-${memory.color}-foreground group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} />
                        </div>
                        <div className={`${isEven ? 'ml-4' : 'mr-4'}`}>
                          <h3 className="font-playful text-2xl text-primary mb-1">
                            {memory.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar size={16} className="mr-2" />
                            <span className="font-medium">{memory.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-6 h-6 rounded-full bg-${memory.color} border-4 border-background shadow-glow z-10`} />
                  </div>
                  
                  <div className="w-full md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
