import React, { useState, useEffect } from "react";

const Footer = () => {
  const originalText = [
    "THE ANALYTICAL ENGINE DOES NOT OCCUPY",
    "COMMON GROUND WITH",
    "MERE CALCULATING MACHINES.",
    "IT HOLDS A POSITION WHOLLY ITS OWN,",
    "AND THE",
    "CONSIDERATIONS IT SUGGESTS",
    "ARE MOST INTERESTING",
    "IN THEIR NATURE"
  ];

  const [glitchText, setGlitchText] = useState(originalText);
  const glitchCharacters = "!@#$%^&*()_+=-~<>?/[]{}|;:0123456789";

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(
        originalText.map((line) => {
          return line
            .split("")
            .map((char) =>
              Math.random() < 0.1 ? 
              glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] 
              : char
            )
            .join("");
        })
      );

      setTimeout(() => {
        setGlitchText(originalText);
      }, 100); // Restore text after a short delay
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full text-left py-30 pl-16">
      {glitchText.map((line, index) => (
        <p key={index} className="text-[1.8em] text-[#1f1f1f] text-jersey">
          {line}
        </p>
        
      ))}
      {/* Blinking Cursor */}
      <span className="inline-block bg-[#1f1f1f] w-2 h-6 ml-1 animate-blink"></span>

      
      {/* ADA LOVELACE Attribution */}
      <p className="mt-6">
        - <span className="text-[#0A00C8] text-jersey text-[1.8em]">ADA</span> <span className="text-jersey text-[#1f1f1f] text-[1.8em]">LOVELACE</span>
      </p>
    </footer>
  );
};

export default Footer;
