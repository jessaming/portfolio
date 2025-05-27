import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const ImageModal = ({ isOpen, onClose, images, currentIndex, title }) => {
  const [modalIndex, setModalIndex] = useState(currentIndex);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setModalIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsVisible(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 200);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isVisible ? "bg-black/90 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className={`absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-all duration-300 z-10 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-all duration-300 z-10 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-all duration-300 z-10 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Image */}
      <div
        className={`relative max-w-[70vw] max-h-[70vh] sm:max-w-[75vw] sm:max-h-[75vh] md:max-w-[80vw] md:max-h-[80vh] lg:max-w-[60vw] lg:max-h-[70vh] xl:max-w-[50vw] xl:max-h-[60vh] flex items-center justify-center transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[modalIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${modalIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-opacity duration-300"
        />
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {modalIndex + 1} / {images.length}
        </div>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 transition-all duration-300 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setModalIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === modalIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
