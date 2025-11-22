import { useState, useEffect, useRef } from "react";

export default function useScrollDirection(threshold = 12) {
  const lastY = useRef(window.scrollY);
  const lastUpdate = useRef(Date.now());
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;

      if (Math.abs(diff) < threshold) return;

      // Prevent spam: only allow update every 250ms
      if (Date.now() - lastUpdate.current < 250) return;

      if (diff > 0) setDirection("down");
      else setDirection("up");

      lastY.current = y;
      lastUpdate.current = Date.now();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return direction;
}
