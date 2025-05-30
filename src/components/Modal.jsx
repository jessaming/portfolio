import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ImageModal = ({ isOpen, onClose, images, currentIndex, title }) => {
  const [modalIndex, setModalIndex] = useState(currentIndex);
  const [isVisible, setIsVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

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
    setZoomLevel(1);
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
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

  const handleImageClick = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : 1));
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
      style={{ overflow: "hidden" }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        className={`absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-all duration-300 z-50 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-all duration-300 z-50 ${
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
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-all duration-300 z-50 ${
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

      <div
        className={`relative max-w-[90vw] max-h-[90vh] flex items-center justify-center transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ overflowY: "auto", borderRadius: "8px" }}
      >
        <img
          src={images[modalIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${modalIndex + 1}`}
          className="max-w-[70vw] max-h-[70vh] object-contain"
          style={{
            transform: `scale(${zoomLevel})`,
            transition: "transform 0.3s ease",
          }}
          draggable={false}
          onClick={handleImageClick}
        />
      </div>

      {images.length > 1 && (
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {modalIndex + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body
  );
};

export default ImageModal;
