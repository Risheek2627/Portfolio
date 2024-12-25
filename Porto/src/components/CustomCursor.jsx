import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className={`fixed rounded-full pointer-events-none z-50 mix-blend-difference
          ${isPointer ? "w-10 h-10 border-2" : "w-8 h-8 border"}
        `}
        style={{
          transform: `translate(${position.x - (isPointer ? 20 : 16)}px, ${
            position.y - (isPointer ? 20 : 16)
          }px)`,
          transition: "all 0.2s ease-out",
          border: `2px solid ${isPointer ? "#60A5FA" : "#93C5FD"}`,
        }}
      />
    </>
  );
};

export default CustomCursor;
