import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import vipDining from "@/assets/vip-dining.jpg";
import cocktailBar from "@/assets/cocktail-bar.jpg";
import cigarLounge from "@/assets/cigar-lounge.jpg";
import heroImage from "@/assets/hero-background.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: "Main Lounge",
      title: "Elegant Main Lounge",
      category: "Interior"
    },
    {
      id: 2,
      src: vipDining,
      alt: "Private Dining",
      title: "Private Dining Experience",
      category: "Dining"
    },
    {
      id: 3,
      src: cocktailBar,
      alt: "Premium Bar",
      title: "Premium Cocktail Bar",
      category: "Bar"
    },
    {
      id: 4,
      src: cigarLounge,
      alt: "Cigar Lounge",
      title: "Sophisticated Cigar Lounge",
      category: "Lounge"
    },
    {
      id: 5,
      src: heroImage,
      alt: "Event Space",
      title: "Exclusive Event Space",
      category: "Events"
    },
    {
      id: 6,
      src: vipDining,
      alt: "Wine Cellar",
      title: "Private Wine Cellar",
      category: "Dining"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into our world of luxury and sophistication through our carefully curated spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in",
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-luxury" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-luxury">
                  <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-luxury-gold mb-1">
                    {image.category}
                  </div>
                  <h3 className="text-white font-medium text-sm">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View Complete Gallery
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;