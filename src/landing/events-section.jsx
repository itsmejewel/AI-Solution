import React, { useState, useEffect } from "react";

const UpcomingEvents = () => {
  const glitchText = "A SIGNAL FLICKERS IN THE STATIC. ARE YOU LISTENING?";
  const [displayText, setDisplayText] = useState(glitchText);
  const [cursorText, setCursorText] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Glitch effect
  useEffect(() => {
    const glitchEffect = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) =>
              Math.random() > 0.7 ? String.fromCharCode(33 + Math.random() * 94) : char
            )
            .join("")
        );

        iterations++;
        if (iterations > 10) {
          clearInterval(interval);
          setTimeout(() => setDisplayText(glitchText), 100);
        }
      }, 100);
    };

    const glitchInterval = setInterval(glitchEffect, 4000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Track cursor position
  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  const events = [
    {
      code: "EVENT CODE 036",
      title: "AI INNOVATIONS CONFERENCE",
      date: "JAN 18, 2025 (19:00 - 23:00)",
      location: "Tokyo, Japan",
      cursorText: "RSVP",
      position: "justify-center",
    },
    {
      code: "EVENT CODE 042",
      title: "MACHINE LEARNING SUMMIT",
      date: "FEB 05, 2025 (14:00 - 18:00)",
      location: "Berlin, Germany",
      cursorText: "FULLY BOOKED",
      position: "justify-end", 
    },
    {
      code: "EVENT CODE 055",
      title: "QUANTUM COMPUTING SYMPOSIUM",
      date: "MAR 12, 2025 (10:00 - 16:00)",
      location: "San Francisco, USA",
      cursorText: "COMING SOON",
      position: "justify-start",
    },
  ];

  return (
    <section className="relative w-full px-10 flex flex-col gap-12 text-[#1f1f1f]">
      {/* HEADER */}
      <div className="flex flex-col items-center w-full text-center">
        <div className="text-[3.5em] text-space text-[#1f1f1f] font-semibold">UPCOMING</div>
        <div className="text-[10em] text-space text-pixel line-special text-[#1f1f1f] font-semibold">EVENTS</div>
      </div>

      {/* GLITCHING TEXT ON THE RIGHT */}
      {/* <p className="text-lg text-space text-[#1f1f1f] tracking-wide text-right">{displayText}</p> */}

      {/* PREVIOUS EVENTS LINK */}
      <a href="#" className="underline text-lg text-space">
        (OUR PREVIOUS EVENTS)
      </a>

      {/* EVENTS LIST */}
      <div className="relative cursor-crosshair content-center flex flex-col gap-10 cursor-none">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex ${event.position} transition-all py-3 duration-300`}
            onMouseEnter={() => setCursorText(event.cursorText)}
            onMouseLeave={() => setCursorText("")}
          >
            {/* EVENT CODE (LEFT) */}
            <div className="text-[2em] font-semibold w-2/5">{event.code}</div>

            {/* EVENT DETAILS (RIGHT) */}
            <div>
              <div className="text-medium font-semibold">{event.title}</div>
              <div className="text-md">{event.date}</div>
              <div className="text-md">{event.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CUSTOM CURSOR */}
      {cursorText && (
        <div
          className="fixed pointer-events-none text-lg font-mono text-[#0A00C8] "
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {cursorText}
        </div>
      )}
      <br />
      <br /><br />
    </section>
  );
};

export default UpcomingEvents;

// import React, { useState, useEffect } from "react";

// const UpcomingEvents = () => {
//   const glitchText = "A SIGNAL FLICKERS IN THE STATIC. ARE YOU LISTENING?";
//   const [displayText, setDisplayText] = useState(glitchText);
//   const [cursorText, setCursorText] = useState("");
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Glitch effect
//   useEffect(() => {
//     const glitchEffect = () => {
//       let iterations = 0;
//       const interval = setInterval(() => {
//         setDisplayText((prev) =>
//           prev
//             .split("")
//             .map((char, index) =>
//               Math.random() > 0.7 ? String.fromCharCode(33 + Math.random() * 94) : char
//             )
//             .join("")
//         );

//         iterations++;
//         if (iterations > 10) {
//           clearInterval(interval);
//           setTimeout(() => setDisplayText(glitchText), 100);
//         }
//       }, 100);
//     };

//     const glitchInterval = setInterval(glitchEffect, 4000);
//     return () => clearInterval(glitchInterval);
//   }, []);

//   // Track cursor position
//   useEffect(() => {
//     const updateCursor = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", updateCursor);
//     return () => window.removeEventListener("mousemove", updateCursor);
//   }, []);

//   const events = [
//     {
//       code: "EVENT CODE 036",
//       title: "AI INNOVATIONS CONFERENCE",
//       date: "JAN 18, 2025 (19:00 - 23:00)",
//       location: "Tokyo, Japan",
//       cursorText: "RSVP",
//       position: "justify-center",
//     },
//     {
//       code: "EVENT CODE 042",
//       title: "MACHINE LEARNING SUMMIT",
//       date: "FEB 05, 2025 (14:00 - 18:00)",
//       location: "Berlin, Germany",
//       cursorText: "FULLY BOOKED",
//       position: "justify-end", 
//     },
//     {
//       code: "EVENT CODE 055",
//       title: "QUANTUM COMPUTING SYMPOSIUM",
//       date: "MAR 12, 2025 (10:00 - 16:00)",
//       location: "San Francisco, USA",
//       cursorText: "COMING SOON",
//       position: "justify-start",
//     },
//   ];

//   return (
//     <section className="relative w-full px-10 flex flex-col gap-12 text-[#1f1f1f]">
//       {/* HEADER */}
//       <div className="flex flex-col items-center w-full text-center">
//         <div className="text-[3.5em] text-space text-[#1f1f1f] font-semibold">UPCOMING</div>
//         <div className="text-[5em] md:text-[5em] text-space text-pixel line-special text-[#1f1f1f] font-semibold">
//           EVENTS
//         </div>
//       </div>

//       {/* PREVIOUS EVENTS LINK */}
//       <a href="#" className="underline text-lg text-space">
//         (OUR PREVIOUS EVENTS)
//       </a>

//       {/* EVENTS LIST */}
//       <div className="relative content-center flex flex-col gap-10">
//         {events.map((event, index) => (
//           <div key={index} className={`relative flex ${event.position} py-3 duration-300`}>
//             {/* EVENT CODE (LEFT) */}
//             <div className="text-[1.5em] font-semibold w-2/5">{event.code}</div>

//             {/* EVENT DETAILS (RIGHT) */}
//             <div>
//               <div className="text-[1.3em] font-semibold">{event.title}</div>
//               <div className="text-md">{event.date}</div>
//               <div className="text-md">{event.location}</div>
//             </div>

//             {/* EVENT STATUS */}
//             <div className="text-lg font-semibold md:hidden">{event.cursorText}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;
