'use client';

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    showButton ? (
      <Button
        color="primary"
        className="fixed bottom-4 right-4 z-[1000]"
        isIconOnly
        onClick={scrollToTop}
      >
        ↑
      </Button>
    ) : null
  );
};

export default TopButton;