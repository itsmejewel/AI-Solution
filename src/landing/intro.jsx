import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Intro() {
  const originalText = "AI-SOLUTIONS";
  const [displayText, setDisplayText] = useState(originalText);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=";

  useEffect(() => {
    const glitchEffect = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        if (iterations < 10) {
          setDisplayText(
            originalText
              .split("")
              .map((char, i) =>
                Math.random() > 0.5
                  ? characters[Math.floor(Math.random() * characters.length)]
                  : char
              )
              .join("")
          );
          iterations++;
        } else {
          clearInterval(interval);
          setDisplayText(originalText);
        }
      }, 80);
    };

    glitchEffect();
    const loop = setInterval(glitchEffect, 4000);

    return () => clearInterval(loop);
  }, []);

  return (
    <>
      <section className="w-full mt-10 flex justify-between items-start px-10 py-8">
        <div className="w-2/3">
          <h2 className="text-large text-[#1F1F1F]">
            {displayText}
          </h2>
          <div className="flex space-x-1 mt-4">
            <p className="text-regular text-[#1F1F1F] w-1/2">
              DIGITAL EMPLOYEE EXPERIENCE <br /> WITH ARTIFICIAL INTELLIGENCE
            </p>
            <p className="text-regular text-[#1F1F1F] w-1/2">
              A.I. TOOL THAT MAKES WORK <br />
              FASTER AND EASIER
            </p>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-col space-y-4 w-1/3 items-end">
          <a
            href="#"
            className="text-[#1F1F1F] cursor-pointer font-semibold text-medium"
          >
            LEARN MORE
          </a>
          <a
            href="#"
            className="text-[#1F1F1F] cursor-pointer font-semibold text-medium"
          >
            GET STARTED
          </a>
        </div>
      </section>
      <div className="pt-6 border-b-1 border-[#1f1f1f]"></div>
    </>
  );
}

export default Intro;

// import React, { useEffect, useState } from "react";

// function Intro() {
//   const originalText = "AI-SOLUTIONS";
//   const [displayText, setDisplayText] = useState(originalText);
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=";

//   useEffect(() => {
//     const glitchEffect = () => {
//       let iterations = 0;
//       const interval = setInterval(() => {
//         if (iterations < 10) {
//           setDisplayText(
//             originalText
//               .split("")
//               .map((char, i) =>
//                 Math.random() > 0.5
//                   ? characters[Math.floor(Math.random() * characters.length)]
//                   : char
//               )
//               .join("")
//           );
//           iterations++;
//         } else {
//           clearInterval(interval);
//           setDisplayText(originalText);
//         }
//       }, 80);
//     };

//     glitchEffect();
//     const loop = setInterval(glitchEffect, 4000);

//     return () => clearInterval(loop);
//   }, []);

//   return (
//     <>
//       <section className="w-full mt-10 flex flex-col md:flex-row justify-between items-start px-3 md:px-10 py-8">
//         {/* Left Side: Title & Description */}
//         <div className="md:w-2/3 w-full">
//           <h2 className="text-large md:text-2xl whitespace-nowrap text-[#1F1F1F]">{displayText}</h2>

//           {/* Stack the text on mobile, side by side on larger screens */}
//           <div className="flex flex-col md:flex-row md:space-x-1 mt-4">
//             <p className="text-regular text-[#1F1F1F] w-full md:w-1/2">
//               DIGITAL EMPLOYEE EXPERIENCE <br /> WITH ARTIFICIAL INTELLIGENCE
//             </p>
//             <p className="text-regular text-[#1F1F1F] w-full md:w-1/2 mt-2 md:mt-0">
//               A.I. TOOL THAT MAKES WORK <br /> FASTER AND EASIER
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Links */}
//         <div className="flex flex-col space-y-4 w-full md:w-1/3 items-end mt-4 md:mt-0">
//           <a
//             href="#"
//             className="text-[#1F1F1F] cursor-pointer font-semibold text-medium"
//           >
//             LEARN MORE
//           </a>
//           <a
//             href="#"
//             className="text-[#1F1F1F] cursor-pointer font-semibold text-medium"
//           >
//             GET STARTED
//           </a>
//         </div>
//       </section>
//       <div className="pt-6 border-b border-[#1F1F1F]"></div>
//     </>
//   );
// }

// export default Intro;
