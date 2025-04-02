import React, { useEffect, useState } from "react";

function HighlightColumns() {
  return (
    <>
      <div className="flex justify-center gap-12 px-8 py-12">
        {/* Left Column */}
        <div className="w-1/4 pt-12">
          <h3 className="text-[1.3em] text-[#0A00C8] text-space font-semibold mb-2">[ 01 ] ABOUT PROJECT</h3>
          <p className="leading-relaxed text-regular">
            AI-SOLUTIONS IMPLEMENTED AN AI-DRIVEN AUTOMATION SYSTEM TO OPTIMIZE
            PRODUCTION EFFICIENCY, REDUCE DOWNTIME, AND ENHANCE PREDICTIVE
            MAINTENANCE FOR MID-SIZED MANUFACTURING COMPANY.
          </p>
          <br />
          <p className="leading-relaxed">
            THE SOLUTION INTEGRATED MACHINE LEARNING MODELS WITH IOT SENSORS TO
            ENABLE REAL-TIME MONITORING AND SMART DECISION-MAKING.
          </p>
        </div>

        {/* Empty Middle Column for Space */}
        <div className="w-1/4"></div>

        {/* Right Column */}
        <div className="w-1/4 pt-12">
          <h3 className="text-[1.3em] text-[#0A00C8] text-space font-semibold mb-2">PHILOSOPHY</h3>
          <p className="leading-relaxed  text-regular">
            OUR APPROACH TO AUTOMATION IS NOT JUST ABOUT EFFICIENCY.
          </p>
          <br />
          <p className="leading-relaxed text-regular">IT’S ABOUT INTELLIGENCE.</p>
          <br />
          <p className="leading-relaxed text-regular">
            BY DESIGNING SYSTEMS THAT ADAPT, LEARN, AND PREDICT, WE ENSURE THAT
            AUTOMATION IS A TOOL FOR AUGMENTATION RATHER THAN REPLACEMENT.
          </p>
          <br />
          <p className="leading-relaxed text-regular">
            THE GOAL IS TO CREATE A SEAMLESS COLLABORATION BETWEEN HUMAN
            EXPERTISE AND AI-DRIVEN PRECISION.
          </p>
        </div>
      </div>
    </>
  );
}

export default HighlightColumns;

// import React from "react";

// function HighlightColumns() {
//   return (
//     <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 px-6 py-8 md:px-8 md:py-12">
//       {/* Left Column - About Project */}
//       <div className="w-full md:w-1/4 pt-6 md:pt-12 text-center md:text-left">
//         <h3 className="text-[1.3em] text-[#0A00C8] font-semibold mb-2">
//           [ 01 ] ABOUT PROJECT
//         </h3>
//         <p className="leading-relaxed text-regular">
//           AI-SOLUTIONS IMPLEMENTED AN AI-DRIVEN AUTOMATION SYSTEM TO OPTIMIZE
//           PRODUCTION EFFICIENCY, REDUCE DOWNTIME, AND ENHANCE PREDICTIVE
//           MAINTENANCE FOR MID-SIZED MANUFACTURING COMPANY.
//         </p>
//         <br />
//         <p className="leading-relaxed">
//           THE SOLUTION INTEGRATED MACHINE LEARNING MODELS WITH IOT SENSORS TO
//           ENABLE REAL-TIME MONITORING AND SMART DECISION-MAKING.
//         </p>
//       </div>

//       {/* Right Column - Philosophy */}
//       <div className="w-full md:w-1/4 pt-6 md:pt-12 text-center md:text-left">
//         <h3 className="text-[1.3em] text-[#0A00C8] font-semibold mb-2">
//           PHILOSOPHY
//         </h3>
//         <p className="leading-relaxed text-regular">
//           OUR APPROACH TO AUTOMATION IS NOT JUST ABOUT EFFICIENCY.
//         </p>
//         <br />
//         <p className="leading-relaxed text-regular">IT’S ABOUT INTELLIGENCE.</p>
//         <br />
//         <p className="leading-relaxed text-regular">
//           BY DESIGNING SYSTEMS THAT ADAPT, LEARN, AND PREDICT, WE ENSURE THAT
//           AUTOMATION IS A TOOL FOR AUGMENTATION RATHER THAN REPLACEMENT.
//         </p>
//         <br />
//         <p className="leading-relaxed text-regular">
//           THE GOAL IS TO CREATE A SEAMLESS COLLABORATION BETWEEN HUMAN
//           EXPERTISE AND AI-DRIVEN PRECISION.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default HighlightColumns;