import React, { useEffect, useState } from "react";

function EventGallery() {
  return (
    <>
      <div className="w-full py-8">
        {/* Title */}
        <div className="text-center pb-7">
          <h2 className="text-[4em] font-semibold text-space text-[#1f1f1f]">AI-SOLUTION</h2>
          <h2 className="text-[7em] font-special text-space text-[#1f1f1f] text-pixel line-special">EVENTS</h2>
        </div>

        {/* Separator */}
        <div className="border-t-1 border-[#1f1f1f] w-screen"></div>

        {/* ROW 1 */}
        <div className="grid grid-cols-12 gap-0 items-center">
          {/* Left - GIF */}
          <div className="col-span-6 relative border-r-1">
            <div className="absolute top-4 left-6 text-[2.8em] text-center tracking-widest font-semibold text-[#ffffff] text-pixel">
              AI INNOVATIONS
            </div>
            <div className="absolute bottom-4 right-6 text-[2em] text-[#ffffff] text-pixel">
              (06.01.2025)
            </div>
            <div
              className="w-full h-[350px] bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/90/32/35/90323505e98d58097484a597480cac5f.jpg')" }}
            ></div>
          </div>
          <div className="col-span-5 px-6 text-[1em] h-[350px] border-r-1 text-space">
            <p className="pt-8">
              AI INNOVATIONS EXPLORED CUTTING-EDGE ADVANCEMENTS IN AI-DRIVEN
              ANALYTICS AND AUTOMATION. INDUSTRY LEADERS DISCUSSED THE
              TRANSFORMATIVE IMPACT OF AI ON MODERN SOLUTIONS.
            </p>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span className="text-[3em] rotate-90 font-semibold text-[#1f1f1f] text-pixel">
              1/3
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t-1 border-[#1f1f1f]"></div>

        {/* ROW 2 */}
        <div className="grid grid-cols-12 gap-0 items-center">
          {/* Left - Description */}
          <div className="col-span-3 px-6">
            <p className="text-[1em] text-space">
              THE AI ETHICS SUMMIT FOCUSED ON THE RESPONSIBLE DEVELOPMENT OF AI,
              ADDRESSING BIAS, TRANSPARENCY, AND ACCOUNTABILITY.
            </p>
          </div>

          {/* Middle - GIF */}
          <div className="col-span-8 relative border-l-1 border-r-1">
            <div className="absolute top-4 left-6 text-[2.8em] text-center tracking-widest font-semibold text-[#ffffff] text-pixel">
              AI ETHICS SUMMIT
            </div>
            <div className="absolute bottom-4 right-6 text-[2em] text-[#ffffff] text-pixel">
              (12.03.2025)
            </div>
            <div
              className="w-full h-[350px] bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/36/c8/58/36c858cff14a1212acbddc29f3ee5e75.jpg')" }}
            ></div>
          </div>

          {/* Right - Indicator */}
          <div className="col-span-1 flex items-center justify-center">
            <span className="text-[3em] rotate-90 font-semibold text-[#1f1f1f] text-pixel">
              2/3
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t-1 border-[#1f1f1f]"></div>

        {/* ROW 3 */}
        <div className="grid grid-cols-12 gap-0 items-center">
          {/* Left - Evenly split */}
          <div className="col-span-5 relative border-r-1">
            <div className="absolute top-4 left-6 text-[2.8em] text-center tracking-widest font-semibold text-[#ffffff] text-pixel">
              AI & HEALTHCARE
            </div>
            <div className="absolute bottom-4 right-6 text-[2em] text-[#ffff] text-pixel">
              (20.05.2025)
            </div>
            <div
              className="w-full h-[350px] bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/00/45/3b/00453b2fc69bdb28ce4d7eba7ad6c7c8.jpg')" }}
            ></div>
          </div>

          {/* Middle - Evenly split */}
          <div className="col-span-6 px-6 text-[1em] text-space border-r-1 h-[350px]">
            <p className="pt-8">
              AI IN HEALTHCARE EXAMINED THE ROLE OF ARTIFICIAL INTELLIGENCE IN
              MEDICAL DIAGNOSTICS, TREATMENT RECOMMENDATIONS, AND PREDICTIVE HEALTHCARE ANALYTICS.
            </p>
          </div>

          {/* Right - Indicator */}
          <div className="col-span-1 flex items-center justify-center">
            <span className="text-[3em] rotate-90 font-semibold text-[#1f1f1f] text-pixel">
              3/3
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t-1 border-[#1f1f1f]"></div>

        {/* FINAL ROW - CONTACT */}
        <div className="grid grid-cols-3 gap-0 items-center h-[100px]">
          <div className="col col-span-1 text-[1.2em] text-space h-[100px] border-r-1 border-[#1f1f1f] px-2 pt-3">
            HAVE QUESTIONS? NEED A CUSTOM SOLUTION? WE'D LOVE TO HEAR FROM YOU!
          </div>

          <div className="col col-span-1 text-[1.2em] text-space h-[100px] border-r-1 border-[#1f1f1f">
          </div>

          <div className="text-[4em] text-[#1f1f1f] font-semibold text-center text-space">CONTACT</div>
        </div>

        {/* Separator */}
        <div className="border-t-1 border-[#1f1f1f]"></div>
      </div>
    </>
  );
}

export default EventGallery;

// import React from "react";

// function EventGallery() {
//   return (
//     <div className="w-full py-8">
//       {/* Title */}
//       <div className="text-center pb-7">
//         <h2 className="text-4xl md:text-[4em] pt-12 font-semibold text-[#1f1f1f]">AI-SOLUTION</h2>
//         <h2 className="text-6xl md:text-[7em] font-special text-[#1f1f1f] text-pixel line-special">EVENTS</h2>
//       </div>

//       {/* Event Sections */}
//       {[{
//         title: "AI INNOVATIONS",
//         date: "06.01.2025",
//         description: "AI INNOVATIONS EXPLORED CUTTING-EDGE ADVANCEMENTS IN AI-DRIVEN ANALYTICS AND AUTOMATION. INDUSTRY LEADERS DISCUSSED THE TRANSFORMATIVE IMPACT OF AI ON MODERN SOLUTIONS.",
//         image: "https://i.pinimg.com/736x/90/32/35/90323505e98d58097484a597480cac5f.jpg",
//       }, {
//         title: "AI ETHICS SUMMIT",
//         date: "12.03.2025",
//         description: "THE AI ETHICS SUMMIT FOCUSED ON THE RESPONSIBLE DEVELOPMENT OF AI, ADDRESSING BIAS, TRANSPARENCY, AND ACCOUNTABILITY.",
//         image: "https://i.pinimg.com/736x/36/c8/58/36c858cff14a1212acbddc29f3ee5e75.jpg",
//       }, {
//         title: "AI & HEALTHCARE",
//         date: "20.05.2025",
//         description: "AI IN HEALTHCARE EXAMINED THE ROLE OF ARTIFICIAL INTELLIGENCE IN MEDICAL DIAGNOSTICS, TREATMENT RECOMMENDATIONS, AND PREDICTIVE HEALTHCARE ANALYTICS.",
//         image: "https://i.pinimg.com/736x/00/45/3b/00453b2fc69bdb28ce4d7eba7ad6c7c8.jpg",
//       }].map((event, index) => (
//         <div key={index} className="border-t border-[#1f1f1f] py-6">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
//             {/* Index */}
//             <div className="md:col-span-1 flex items-center justify-center">
//               <span className="text-2xl md:text-[3em] font-semibold text-[#1f1f1f] text-pixel">
//                 {index + 1}/3
//               </span>
//             </div>
//             {/* Image */}
//             <div className="md:col-span-6 relative border-r md:border-r-1">
//               <div className="absolute top-4 left-6 text-2xl md:text-[2.8em] font-semibold text-white text-pixel">
//                 {event.title}
//               </div>
//               <div className="absolute bottom-4 right-6 text-xl md:text-[2em] text-white text-pixel">
//                 ({event.date})
//               </div>
//               <div
//                 className="w-full h-[250px] md:h-[350px] bg-cover bg-center"
//                 style={{ backgroundImage: `url('${event.image}')` }}
//               ></div>
//             </div>
//             {/* Description */}
//             <div className="md:col-span-5 px-6 text-base md:text-[1em] border-r md:border-r-1 text-space">
//               <p className="pt-4 md:pt-8">{event.description}</p>
//             </div>
            
//           </div>
//         </div>
//       ))}

//       {/* Contact Section */}
//       <div className="border-t border-[#1f1f1f] py-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[100px] items-center">
//           <div className="md:col-span-1 text-base md:text-[1.2em] text-space border-r md:border-r-1 border-[#1f1f1f] px-4 md:px-2">
//             HAVE QUESTIONS? NEED A CUSTOM SOLUTION? WE'D LOVE TO HEAR FROM YOU!
//           </div>
//           <div className="md:col-span-1 border-r md:border-r-1 border-[#1f1f1f] h-[50px] md:h-[100px]"></div>
//           <div className="text-3xl md:text-[4em] text-[#1f1f1f] font-semibold text-center text-space">CONTACT</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventGallery;
