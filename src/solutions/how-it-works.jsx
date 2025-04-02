// import React, { useEffect, useState } from "react";

// function HowItWorks() {
//   return (
//     <>
//       <div className="text-center mt-20 mb-20">
//         <h2 className="text-[3em] text-space font-semibold text-[#1f1f1f]">
//           HOW IT <span className="text-[1.1em] text-pixel text-[#1f1f1f]">WORKS</span>
//         </h2>
//         <br /><br />
//         <div className="flex justify-center mt-6">
//           {/* Placeholder for SVG */}
//           <img width="800" height="800" src="/src/assets/working-solution.png">
//           </img>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HowItWorks;

import React, { useEffect, useState } from "react";

function HowItWorks() {
  return (
    <>
      <div className="text-center mt-20 mb-20">
        <h2 className="text-[3em] text-space font-semibold text-[#1f1f1f]">
          HOW IT <span className="text-[1.1em] text-pixel text-[#1f1f1f]">WORKS</span>
        </h2>
        <br /><br />
        <div className="flex justify-center mt-6">
          {/* Placeholder for SVG */}
          <img width="800" height="800" src="/src/assets/working-solution1.png"></img>
        </div>
        <div className="flex justify-center mt-6">
          {/* Placeholder for SVG */}
          <img width="800" height="800" src="/src/assets/working-solution2.png"></img>
        </div>
        <div className="flex justify-center mt-6 px-4">
          {/* Placeholder for SVG */}
          <img width="800" height="800" src="/src/assets/working-solution3.png"></img>
        </div>
        <div className="flex justify-center mt-6">
          {/* Placeholder for SVG */}
          <img width="800" height="800" src="/src/assets/working-solution4.png"></img>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
