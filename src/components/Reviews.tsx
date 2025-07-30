import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alexander Blackwell",
      title: "Investment Banker",
      rating: 5,
      text: "The Meridian Club has exceeded every expectation. The attention to detail, impeccable service, and exclusive atmosphere make it truly exceptional. A haven for discerning professionals.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Victoria Sterling",
      title: "Art Curator",
      rating: 5,
      text: "An oasis of sophistication in the heart of the city. The wine selection is unparalleled, and the private events are always memorable. Membership here is invaluable.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Robert Chen",
      title: "Tech Executive",
      rating: 5,
      text: "The perfect blend of tradition and modernity. Whether for business meetings or personal relaxation, The Meridian provides an unmatched environment of luxury and privacy.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Diana Montgomery",
      title: "Fashion Designer",
      rating: 5,
      text: "Every visit feels like a special occasion. The staff knows my preferences, the ambiance is always perfect, and the exclusivity is exactly what I was looking for.",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "James Harrison",
      title: "Hedge Fund Manager",
      rating: 5,
      text: "The Meridian Club sets the gold standard for private membership clubs. Outstanding cuisine, exceptional service, and a network of remarkable individuals.",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Sophia Laurent",
      title: "Luxury Real Estate",
      rating: 5,
      text: "A sanctuary of elegance where every detail is perfected. The cigar lounge and cocktail bar are my personal favorites. Truly a cut above the rest.",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "text-luxury-gold fill-luxury-gold" : "text-gray-400"
        )}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Member Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our distinguished members about their experiences at The Meridian Club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={cn(
                "border-luxury-gold/20 bg-luxury-charcoal hover:shadow-luxury transition-luxury animate-fade-in relative overflow-hidden group"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-luxury">
                  <Quote className="w-12 h-12 text-luxury-gold" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                
                {/* Review Text */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </blockquote>
                
                {/* Reviewer Info */}
                <div className="border-t border-luxury-gold/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-luxury-gold transition-smooth">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.title}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Summary */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center glass px-8 py-6 rounded-xl border border-luxury-gold/30">
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                alt="Google" 
                className="w-6 h-6"
              />
              <span className="text-lg font-medium text-foreground">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              {renderStars(5)}
              <span className="text-2xl font-bold text-luxury-gold ml-2">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">Based on 247+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;