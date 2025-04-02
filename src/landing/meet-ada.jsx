import React from "react";
import { Link } from "react-router-dom";

function MeetAda() {
  return (
    <>
      <section className="flex flex-col items-center text-center py-6 px-6">
        {/* Main Heading with Link to ADA Page */}
        <Link to="/ada" className="no-glitch">
          <h1 className="text-largest md:text-[1em]">
            [MEET <span className="text-[#0A00C8] text-pixel text-ada">ADA</span>]
          </h1>
        </Link>

        {/* Introduction Text */}
        <p className="mt-4 text-regular max-w-2xl">
          ADA ANSWERS YOUR QUESTIONS, OFFERS GUIDANCE, AND PROVIDES PROTOTYPING IDEAS TO KICKSTART YOUR PROJECT.
        </p>

        {/* Logos Section */}
        <div className="mt-8 overflow-hidden">
          <div className="logos-container flex">
            {/* Duplicated logos for seamless looping */}
            {/* <img src="/src/assets/company1.png" alt="Company 1" className="h-20 mx-8 " /> */}
            <img src="/src/assets/company2.png" alt="Company 2" className="h-20 mx-8" />
            <img src="/src/assets/company3.png" alt="Company 3" className="h-20 mx-8 " />
            <img src="/src/assets/company4.png" alt="Company 4" className="h-20 mx-8 " />
            <img src="/src/assets/company5.png" alt="Company 5" className="h-20 mx-8 " />

          </div>
        </div>
      </section>
    </>
  );
}

export default MeetAda;

// import React from "react";
// import { Link } from "react-router-dom";

// function MeetAda() {
//   return (
//     <>
//       <section className="flex flex-col items-center text-center py-6 px-6">
//         {/* Main Heading with Link to ADA Page */}
//         <Link to="/ada" className="no-glitch">
//           <h1 className="text-[4em] font-semibold md:text-[1em]">
//             [MEET <span className="text-[#0A00C8] text-pixel text-ada">ADA</span>]
//           </h1>
//         </Link>

//         {/* Introduction Text */}
//         <p className="mt-4 text-regular max-w-2xl">
//           ADA ANSWERS YOUR QUESTIONS, OFFERS GUIDANCE, AND PROVIDES PROTOTYPING IDEAS TO KICKSTART YOUR PROJECT.
//         </p>

//         {/* Logos Section */}
//         <div className="mt-8 ">
//           <div className=" flex">
//             {/* Duplicated logos for seamless looping */}
//             {/* <img src="/src/assets/company1.png" alt="Company 1" className="h-20 " /> */}
//             <img src="/src/assets/company2.png" alt="Company 2" className="h-20 " />
//             <img src="/src/assets/company3.png" alt="Company 3" className="h-20 " />
//             {/* <img src="/src/assets/company4.png" alt="Company 4" className="h-20 " /> */}
//             <img src="/src/assets/company5.png" alt="Company 5" className="h-20  " />

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default MeetAda;


