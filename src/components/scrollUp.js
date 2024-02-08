'use client'
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Use "smooth" for a smoother scroll
      });
  };

  return (
    <button
      className={`fixed bottom-16 right-4 rounded-full p-4 bg-black text-white border-white border outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }} // Add a pointer cursor
    >
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollToTopButton;
