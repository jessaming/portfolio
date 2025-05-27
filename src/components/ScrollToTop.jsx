"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronsUp } from "lucide-react";
import scrollbar from "smooth-scrollbar";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollInstance = scrollbar.get(document.body);

    if (!scrollInstance) {
      return;
    }

    const onScroll = () => {
      setShow(scrollInstance.scrollTop > 800);
    };

    scrollInstance.addListener(onScroll);

    onScroll();

    return () => {
      scrollInstance.removeListener(onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollInstance = scrollbar.get(document.body);
    if (scrollInstance) {
      scrollInstance.scrollTo(0, 0, 500);
    }
  };

  if (!show) return null;

  return createPortal(
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 xl:bottom-12 xl:right-12 z-50 p-3 bg-primary text-white rounded-full shadow-lg animate-fadeInUp hover:shadow-xl hover:scale-105 hover:text-secondary transition-all duration-300"
      style={{ position: "fixed" }}
    >
      <ChevronsUp size={20} />
    </button>,
    document.body
  );
};

export default ScrollToTop;
