import React, { useEffect } from "react";

function GlobalEffects() {
  useEffect(() => {
    // const glitchElements = document.querySelectorAll("a, button");
    const glitchElements = document.querySelectorAll("a:not(.no-glitch), button:not(.no-glitch)");


    glitchElements.forEach((el) => {
      let originalText = el.textContent;

      el.addEventListener("mouseenter", () => {
        let interval = setInterval(() => {
          el.textContent = originalText
            .split("")
            .map((char) => (Math.random() > 0.5 ? getRandomChar() : char))
            .join("");
        }, 90); // Faster glitching effect

        setTimeout(() => {
          clearInterval(interval);
          el.textContent = originalText;
        }, 300); // Runs for 600ms before resetting
      });
    });

    function getRandomChar() {
      const chars = "!@#$%^&*()_+=-[]{}|;:',.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return chars[Math.floor(Math.random() * chars.length)];
    }
  }, []);

  return null; // No UI, just runs effect globally
}

export default GlobalEffects;
