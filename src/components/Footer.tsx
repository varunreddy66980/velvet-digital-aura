import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-luxury-dark-navy py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  The Meridian Club
                </h3>
                <p className="text-sm text-muted-foreground tracking-widest uppercase">
                  Private Members Club
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              An exclusive sanctuary where sophistication meets excellence. 
              Experience the pinnacle of luxury living with our distinguished community.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">
                    123 Luxury Boulevard<br />
                    Metropolitan District<br />
                    New York, NY 10021
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">
                    membership@meridianclub.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Membership */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-foreground mb-6">
              Hours & Membership
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Club Hours</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday - Thursday: 6:00 AM - 12:00 AM</p>
                    <p>Friday - Saturday: 6:00 AM - 2:00 AM</p>
                    <p>Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="luxury" className="w-full">
                  Apply for Membership
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} The Meridian Club. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-muted-foreground hover:text-luxury-gold transition-smooth">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-luxury-gold transition-smooth">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-luxury-gold transition-smooth">
                Member Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;