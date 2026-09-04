import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation.css";

const ScrollAnimation = ({
  children,
  delay = 0,
  type = "up",
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-animation ${type} ${
        visible ? "show" : ""
      } ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;