import React, { useEffect, useRef, useState } from "react";
import "./TypingText.css";

const TypingText = ({
  text,
  speed = 100,
  className = "",
}) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
          setDisplayText("");
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(typing);
      }
    }, speed);

    return () => clearInterval(typing);
  }, [started, text, speed]);

  // Find middle of text
  const middle = Math.floor(text.length / 2);

  // Find nearest space
  const leftSpace = text.lastIndexOf(" ", middle);
  const rightSpace = text.indexOf(" ", middle);

  let breakPosition;

  if (leftSpace === -1) {
    breakPosition = rightSpace;
  } else if (rightSpace === -1) {
    breakPosition = leftSpace;
  } else {
    breakPosition =
      middle - leftSpace <= rightSpace - middle
        ? leftSpace
        : rightSpace;
  }

  const firstLine = displayText.slice(0, breakPosition);
  const secondLine =
    displayText.length > breakPosition
      ? displayText.slice(breakPosition + 1)
      : "";

  return (
    <span
      ref={ref}
      className={`typing-text ${className}`}
    >
      <span className="typing-line">
        {firstLine}
      </span>

      <span className="typing-line">
        {secondLine}
        <span className="typing-cursor">|</span>
      </span>
    </span>
  );
};

export default TypingText;