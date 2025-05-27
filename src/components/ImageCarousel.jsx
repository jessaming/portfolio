import { useState, useEffect } from "react";
import { IoExpand } from "react-icons/io5";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useIsLargeScreen from "../hooks/screen";

export const ImageCarousel = ({ images, title, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (isTransitioning) return;
    const next = (currentIndex + 1) % images.length;
    setNextIndex(next);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(next);
      setIsTransitioning(false);
    }, 1000);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    const prev = (currentIndex - 1 + images.length) % images.length;
    setNextIndex(prev);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(prev);
      setIsTransitioning(false);
    }, 1000);
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setNextIndex(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 1000);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextImage();
    } else if (distance < -50) {
      prevImage();
    }
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length, currentIndex]);

  if (images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
      <div
        className="relative aspect-[4/3] w-full cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => onImageClick(currentIndex)}
      >
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          style={{
            zIndex: 1,
            transform: "scale(1)",
            transition: "transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />

        {isTransitioning && (
          <img
            src={images[nextIndex] || "/placeholder.svg"}
            alt={`${title} - Image ${nextIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              zIndex: 2,
              opacity: 0,
              animation:
                "crossfadeIn 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 z-20">
          <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 transform transition-all duration-700 hover:bg-black/70 hover:scale-105">
            <IoExpand size={18} className="inline-block animate-pulse" />
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 hover:bg-white text-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110 z-30 disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={nextImage}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 hover:bg-white text-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110 z-30 disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            <ChevronRight size={14} />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-700 disabled:opacity-20 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80 hover:scale-105"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded-full transition-all duration-500 z-30">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
