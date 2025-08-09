import React, { useEffect, useRef, useState } from "react";

export default function FlyInSection({ children, direction = "up", delay = 0 }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "animate-flyInUp",
    down: "animate-flyInDown",
    left: "animate-flyInLeft",
    right: "animate-flyInRight",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`transition-opacity duration-700 ${
        isVisible ? directionClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
