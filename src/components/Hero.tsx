import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/ui/video-background";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToNextSection = () => {
    const eventsSection = document.querySelector("#events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <VideoBackground
        fallbackImage={heroImage}
        className="absolute inset-0"
        overlay={true}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">The Meridian</span>
          </h1>
          <h2 className="font-playfair text-3xl md:text-5xl font-medium mb-8 text-foreground">
            Private Members Club
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury and sophistication. 
            Where exclusivity meets excellence in every moment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
              Explore Elite Experience
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Request Membership
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className="text-luxury-gold hover:text-luxury-champagne transition-smooth"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;