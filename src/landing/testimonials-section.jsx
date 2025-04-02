// import React, { useRef, useEffect, useState } from "react";

// function TestimonialsSection() {
//   const scrollRef = useRef(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const testimonials = [
//     {
//       name: "RICKY BAZICKY",
//       company: "MOTION SHARK",
//       quote: "BEST SERVICE EVER, I DEVOTE MY FLESH AND SOUL TO THIS COMPANY.",
//       imgSrc: "/src/assets/review1.png",
//     },
//     {
//       name: "JENNA LUX",
//       company: "LUX DESIGN",
//       quote: "REVOLUTIONARY EXPERIENCE, NOTHING COMES CLOSE.",
//       imgSrc: "/src/assets/review2.png",
//     },
//     {
//       name: "JASON QUINN",
//       company: "CODE HAVEN",
//       quote: "I'M NEVER GOING BACK TO ANY OTHER PROVIDER.",
//       imgSrc: "/src/assets/review3.png",
//     },
//     {
//       name: "ANNA RIOS",
//       company: "NEON FUTURE LABS",
//       quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
//       imgSrc: "/src/assets/review4.png",
//     },
//     {
//       name: "JASON QUINN",
//       company: "CODE HAVEN",
//       quote: "I'M NEVER GOING BACK TO ANY OTHER PROVIDER.",
//       imgSrc: "/src/assets/review5.png",
//     },
//     {
//       name: "ANNA RIOS",
//       company: "NEON FUTURE LABS",
//       quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
//       imgSrc: "/src/assets/review1.png",
//     },
//     {
//       name: "ANNA RIOS",
//       company: "NEON FUTURE LABS",
//       quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
//       imgSrc: "/src/assets/review4.png",
//     },
//     {
//       name: "JASON QUINN",
//       company: "CODE HAVEN",
//       quote: "I'M NEVER GOING BACK TO ANY OTHER PROVIDER.",
//       imgSrc: "/src/assets/review5.png",
//     },
//     {
//       name: "ANNA RIOS",
//       company: "NEON FUTURE LABS",
//       quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
//       imgSrc: "/src/assets/review1.png",
//     },
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="relative w-full py-5 cursor-none">
//       {/* Static Header */}
//       <div className="text-center text-largest w-[90vw] mx-auto mb-10">
//         TESTIMONIALS
//       </div>

//       {/* Horizontal Scroll Container */}
//       <div
//         ref={scrollRef}
//         className="relative w-full overflow-x-auto flex gap-10 px-10 no-scrollbar"
//         style={{ scrollSnapType: "x mandatory" }}
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Scattered Testimonials */}
//         <div className="flex space-x-12">
//           {testimonials.map((item, i) => (
//             <div
//               key={i}
//               className={`relative min-w-[250px] max-w-[350px] ${
//                 i % 2 === 0 ? "mt-10" : "mt-0"
//               }`}
//               style={{ scrollSnapAlign: "center" }}
//             >
//               {/* Image */}
//               <img
//                 src={item.imgSrc}
//                 alt={item.name}
//                 className="w-full h-60 object-fit"
//               />

//               {/* Text Content */}
//               <div className="mt-3">
//                 <p className="text-md font-bold text-[#1f1f1f]">/{item.name}/</p>
//                 <p className="text-xs text-gray-500">{item.company}</p>
//                 <p className="text-regular mt-1">
//                   "{item.quote}"
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom Cursor */}
//       <div
//         className="fixed pointer-events-none text-space text-[#0A00C8] transition-transform duration-100"
//         style={{
//           left: `${cursorPos.x}px`,
//           top: `${cursorPos.y}px`,
//           transform: "translate(-50%, -50%)",
//           opacity: isHovering ? 1 : 0,
//         }}
//       >
//         (SCROLL →)
//       </div>

//       {/* Hide Scrollbar */}
//       <style>
//         {`
//           .no-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//           .no-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default TestimonialsSection;

import React, { useRef, useEffect, useState } from "react";

function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = [
    {
      name: "RICKY BAZICKY",
      company: "MOTION SHARK",
      quote: "BEST SERVICE EVER, I DEVOTE MY FLESH AND SOUL TO THIS COMPANY.",
      imgSrc: "/src/assets/review1.png",
    },
    {
      name: "JENNA LUX",
      company: "LUX DESIGN",
      quote: "REVOLUTIONARY EXPERIENCE, NOTHING COMES CLOSE.",
      imgSrc: "/src/assets/review2.png",
    },
    {
      name: "JASON QUINN",
      company: "CODE HAVEN",
      quote: "I'M NEVER GOING BACK TO ANY OTHER PROVIDER.",
      imgSrc: "/src/assets/review3.png",
    },
    {
      name: "ANNA RIOS",
      company: "NEON FUTURE LABS",
      quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
      imgSrc: "/src/assets/review4.png",
    },
    {
      name: "JASON QUINN",
      company: "CODE HAVEN",
      quote: "I'M NEVER GOING BACK TO ANY OTHER PROVIDER.",
      imgSrc: "/src/assets/review5.png",
    },
    {
      name: "ANNA RIOS",
      company: "NEON FUTURE LABS",
      quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
      imgSrc: "/src/assets/review1.png",
    },
    {
      name: "ANNA RIOS",
      company: "NEON FUTURE LABS",
      quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
      imgSrc: "/src/assets/review4.png",
    },
    {
      name: "JASON QUINN",
      company: "CODE HAVEN",
      quote: "I'M NEVER GOING BACK TO ANY OTHER PROVIDER.",
      imgSrc: "/src/assets/review5.png",
    },
    {
      name: "ANNA RIOS",
      company: "NEON FUTURE LABS",
      quote: "EXCEPTIONAL SERVICE, I'M BEYOND IMPRESSED.",
      imgSrc: "/src/assets/review1.png",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-5 cursor-none">
      {/* Static Header */}
      <div className="text-center font-semibold text-[3.5em] w-[90vw] mx-auto mb-10">
        TESTIMONIALS
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-auto flex gap-10 px-10 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Scattered Testimonials */}
        <div className="flex space-x-12">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`relative min-w-[250px] max-w-[350px] ${
                i % 2 === 0 ? "mt-10" : "mt-0"
              }`}
              style={{ scrollSnapAlign: "center" }}
            >
              {/* Image */}
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-60 object-fit"
              />

              {/* Text Content */}
              <div className="mt-3">
                <p className="text-md font-bold text-[#1f1f1f]">/{item.name}/</p>
                <p className="text-xs text-gray-500">{item.company}</p>
                <p className="text-regular mt-1">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none text-space text-[#0A00C8] transition-transform duration-100"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isHovering ? 1 : 0,
        }}
      >
        (SCROLL →)
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}

export default TestimonialsSection;