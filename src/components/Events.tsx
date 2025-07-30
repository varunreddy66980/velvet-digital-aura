import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Wine Tasting Experience",
      date: "March 15, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Private Wine Cellar",
      attendees: 24,
      maxAttendees: 30,
      description: "An exclusive evening featuring rare vintages from our private collection, paired with artisanal cheeses and gourmet canapés.",
      image: "🍷",
      category: "Culinary"
    },
    {
      id: 2,
      title: "Jazz & Cocktails Night",
      date: "March 22, 2024",
      time: "8:00 PM - 12:00 AM",
      location: "Meridian Lounge",
      attendees: 45,
      maxAttendees: 60,
      description: "Live jazz performances in our intimate lounge setting, featuring craft cocktails and premium spirits.",
      image: "🎷",
      category: "Entertainment"
    },
    {
      id: 3,
      title: "Executive Networking Dinner",
      date: "April 5, 2024",
      time: "6:30 PM - 10:00 PM",
      location: "Private Dining Room",
      attendees: 18,
      maxAttendees: 25,
      description: "Connect with industry leaders over a seven-course tasting menu prepared by our executive chef.",
      image: "🤝",
      category: "Business"
    },
    {
      id: 4,
      title: "Cigar & Whiskey Pairing",
      date: "April 12, 2024",
      time: "9:00 PM - 11:30 PM",
      location: "Humidor Lounge",
      attendees: 12,
      maxAttendees: 20,
      description: "A sophisticated evening exploring premium cigars paired with aged whiskeys from around the world.",
      image: "🚬",
      category: "Leisure"
    }
  ];

  return (
    <section id="events" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Upcoming Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated calendar of exclusive experiences designed for the discerning member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className={cn(
                "group hover:shadow-luxury transition-luxury cursor-pointer border-luxury-gold/20 bg-luxury-charcoal",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{event.image}</div>
                  <div className="text-xs uppercase tracking-wider text-luxury-gold px-3 py-1 rounded-full border border-luxury-gold/30">
                    {event.category}
                  </div>
                </div>
                <CardTitle className="font-playfair text-xl mb-2 group-hover:text-luxury-gold transition-smooth">
                  {event.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-luxury-gold" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-luxury-gold" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-luxury-gold" />
                    {event.attendees}/{event.maxAttendees} attending
                  </div>
                </div>
                
                <div className="pt-4 border-t border-luxury-gold/20">
                  <Button variant="premium" size="sm" className="w-full">
                    Reserve Your Spot
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;