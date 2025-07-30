import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src?: string;
  fallbackImage: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

const VideoBackground = ({ 
  src, 
  fallbackImage, 
  children, 
  className, 
  overlay = true 
}: VideoBackgroundProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setHasError(true);
      });
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Video Background */}
      {src && !hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      
      {/* Fallback Image */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
          isVideoLoaded && !hasError ? "opacity-0" : "opacity-100"
        )}
        style={{ backgroundImage: `url(${fallbackImage})` }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 overlay-gradient" />
      )}
      
      {/* Content */}
      {children && (
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;