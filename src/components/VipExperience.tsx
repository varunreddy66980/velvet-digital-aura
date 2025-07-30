import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Users, Calendar, Star } from "lucide-react";
import vipDining from "@/assets/vip-dining.jpg";
import cocktailBar from "@/assets/cocktail-bar.jpg";
import cigarLounge from "@/assets/cigar-lounge.jpg";

const VipExperience = () => {
  const experiences = [
    {
      icon: Crown,
      title: "Private Dining",
      description: "Intimate dining experiences in our exclusive private rooms with personalized service and chef's table options.",
      image: vipDining,
      features: ["Private Chef Service", "Sommelier Selection", "Custom Menus", "24/7 Concierge"]
    },
    {
      icon: Star,
      title: "Premium Bar",
      description: "World-class spirits, rare wines, and craft cocktails in our sophisticated bar environment.",
      image: cocktailBar,
      features: ["Rare Spirits Collection", "Master Mixologists", "Exclusive Tastings", "Member Events"]
    },
    {
      icon: Users,
      title: "Cigar Lounge",
      description: "Relax in our temperature-controlled humidor with premium cigars from around the world.",
      image: cigarLounge,
      features: ["Premium Cigar Selection", "Climate Controlled", "Pairing Events", "Expert Curation"]
    }
  ];

  return (
    <section id="vip" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">VIP Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Indulge in unparalleled luxury with our exclusive member experiences, 
            crafted for those who appreciate the finest things in life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card
                key={experience.title}
                className="group overflow-hidden border-luxury-gold/20 bg-luxury-charcoal hover:shadow-luxury transition-luxury animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                  />
                  <div className="absolute inset-0 overlay-gradient opacity-60 group-hover:opacity-40 transition-luxury" />
                  <div className="absolute top-4 right-4 w-12 h-12 luxury-gradient rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-3 group-hover:text-luxury-gold transition-smooth">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {experience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 luxury-gradient rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="premium" className="w-full group-hover:scale-105 transition-luxury">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full border border-luxury-gold/30">
            <Calendar className="w-5 h-5 text-luxury-gold" />
            <span className="text-foreground">Book your exclusive experience today</span>
          </div>
          <div className="mt-6">
            <Button variant="luxury" size="lg" className="px-12">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipExperience;