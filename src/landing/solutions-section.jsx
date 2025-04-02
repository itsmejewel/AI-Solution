import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

// Solutions Menu Component
const solutions = [
  {
    category: "ENGINEERING & MANUFACTURING",
    items: [
      {
        number: "01",
        name: "AI-DRIVEN AUTOMATION",
        description: "ENHANCING INDUSTRIAL WORKFLOWS WITH AI.",
        link: "#",
      },
      {
        number: "02",
        name: "PREDICTIVE MAINTENANCE",
        description: "REDUCING DOWNTIME THROUGH SMART ANALYTICS.",
        link: "#",
      },
    ],
  },
  {
    category: "HEALTHCARE & BIOTECH",
    items: [
      {
        number: "01",
        name: "AI-POWERED DIAGNOSTICS",
        description: "FASTER, MORE ACCURATE MEDICAL ASSESSMENTS.",
        link: "#",
      },
      {
        number: "02",
        name: "GENOMICS AI",
        description: "REVOLUTIONIZING DNA ANALYSIS WITH DEEP LEARNING.",
        link: "#",
      },
    ],
  },
  {
    category: "FINANCE & SECURITY",
    items: [
      {
        number: "01",
        name: "FRAUD DETECTION AI",
        description: "SECURING TRANSACTIONS IN REAL-TIME.",
        link: "#",
      },
      {
        number: "02",
        name: "AI-DRIVEN RISK ANALYSIS",
        description: "IDENTIFYING THREATS BEFORE THEY EMERGE.",
        link: "#",
      },
    ],
  },
];

function SolutionsMenu() {
  return (
    <div className="space-y-10">
      {solutions.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-[#1F1F1F] mb-4">
            {section.category}:
          </h3>
          <div className="space-y-4">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[50px_250px_auto_50px] gap-4 items-center border-b border-gray-300 pb-2"
              >
                <span className="text-lg font-bold">{item.number}</span>
                <span className="text-md font-semibold">{item.name}</span>
                <span className="text-sm text-gray-600">
                  {item.description}
                </span>
                <Link to="/solutions" className="text-[#1f1f1f] text-xl">
                  →
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SolutionsSection() {
  const sectionRef = useRef(null);
  const menuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !menuRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const menuBottom = menuRef.current.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      // If the menu is still visible, keep the left column sticky
      setIsSticky(sectionTop <= 0 && menuBottom > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex px-10 py-16 relative border-t-1 border-[#1f1f1f]">
      {/* Left Column (Sticky Title) */}
      <div className="w-1/2 pr-10">
        <div
          className={`pl-10 transition-all duration-300 ${
            isSticky ? "sticky top-0" : ""
          }`}
        >
          <h2 className="text-5xl font-bold tracking-tight leading-none text-solutions">
            Solut- <br /> ions
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            OUR AI-POWERED SOFTWARE SOLUTIONS
          </p>
        </div>
      </div>

      {/* Right Column (Scrolling Menu) */}
      <div
        ref={menuRef}
        className="w-1/2 flex flex-col space-y-8 pr-10 overflow-y-auto max-h-[80vh] no-scrollbar"
      >
        {/* <p className="text-lg text-[#1F1F1F]">ABOUT OUR SOLUTIONS</p> */}
        <SolutionsMenu />
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-right">
            OUR SOLUTIONS, <br /> SUMMARIZED.
          </p>
          <p className="text-md font-medium">(01:20)</p>
        </div>
        <div className="w-full">
          <video className="w-full h-auto rounded-lg shadow-lg" controls>
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
    </section>
  );
}

export default SolutionsSection;

// import React, { useRef, useEffect, useState } from "react";
// import { BrowserRouter, Link } from "react-router-dom";

// // Solutions Menu Component
// const solutions = [
//   {
//     category: "ENGINEERING & MANUFACTURING",
//     items: [
//       {
//         number: "01",
//         name: "AI-DRIVEN AUTOMATION",
//         description: "ENHANCING INDUSTRIAL WORKFLOWS WITH AI.",
//         link: "#",
//       },
//       {
//         number: "02",
//         name: "PREDICTIVE MAINTENANCE",
//         description: "REDUCING DOWNTIME THROUGH SMART ANALYTICS.",
//         link: "#",
//       },
//     ],
//   },
//   {
//     category: "HEALTHCARE & BIOTECH",
//     items: [
//       {
//         number: "01",
//         name: "AI-POWERED DIAGNOSTICS",
//         description: "FASTER, MORE ACCURATE MEDICAL ASSESSMENTS.",
//         link: "#",
//       },
//       {
//         number: "02",
//         name: "GENOMICS AI",
//         description: "REVOLUTIONIZING DNA ANALYSIS WITH DEEP LEARNING.",
//         link: "#",
//       },
//     ],
//   },
//   {
//     category: "FINANCE & SECURITY",
//     items: [
//       {
//         number: "01",
//         name: "FRAUD DETECTION AI",
//         description: "SECURING TRANSACTIONS IN REAL-TIME.",
//         link: "#",
//       },
//       {
//         number: "02",
//         name: "AI-DRIVEN RISK ANALYSIS",
//         description: "IDENTIFYING THREATS BEFORE THEY EMERGE.",
//         link: "#",
//       },
//     ],
//   },
// ];

// function SolutionsMenu() {
//   return (
//     <div className="space-y-10">
//       {solutions.map((section, index) => (
//         <div key={index}>
//           <h3 className="text-lg font-semibold text-[#1F1F1F] mb-4">
//             {section.category}:
//           </h3>
//           <div className="space-y-4">
//             {section.items.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="grid grid-rows-[25px] gap-4 items-center border-b border-gray-300 pb-2"
//               >
//                 <span className="text-lg font-bold">{item.number}</span>
//                 <span className="text-md font-semibold">{item.name}</span>
//                 <span className="text-sm text-gray-600">
//                   {item.description}
//                 </span>
//                 <Link to="/solutions" className="text-[#1f1f1f] text-xl">
//                   →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function SolutionsSection() {
//   const sectionRef = useRef(null);
//   const menuRef = useRef(null);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current || !menuRef.current) return;

//       const sectionTop = sectionRef.current.getBoundingClientRect().top;
//       const menuBottom = menuRef.current.getBoundingClientRect().bottom;
//       const viewportHeight = window.innerHeight;

//       // If the menu is still visible, keep the left column sticky
//       setIsSticky(sectionTop <= 0 && menuBottom > viewportHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full flex px-3 py-16 relative border-t-1 border-[#1f1f1f] flex-col lg:flex-row">
//       {/* Left Column (Sticky Title) */}
//       <div className="w-full lg:w-1/2 pr-10">
//         <div
//           className={`pl-10 transition-all duration-300 ${
//             isSticky ? "sticky top-0" : ""
//           }`}
//         >
//           <h2 className="text-[5em] lg:text-5xl font-bold text-space tracking-tight leading-none text-pixel">
//             {/* Solut- <br /> ions */}
//             Solutions
//           </h2>
//           <p className="mt-4 text-lg text-gray-700 pb-6">
//             OUR AI-POWERED SOFTWARE SOLUTIONS
//           </p>
//         </div>
//       </div>

//       {/* Right Column (Scrolling Menu) */}
//       <div
//         ref={menuRef}
//         className="w-full lg:w-1/2 flex flex-col space-y-8 pr-10 overflow-y-auto max-h-[80vh] no-scrollbar"
//       >
//         <SolutionsMenu />
//         <div className="flex justify-between items-center">
//           <p className="text-md font-semibold text-right">
//             OUR SOLUTIONS, <br /> SUMMARIZED.
//           </p>
//           <p className="text-md font-medium">(01:20)</p>
//         </div>
//         <div className="w-full">
//           <video className="w-full h-auto rounded-lg shadow-lg" controls>
//             <source src="https://www.youtube.com/watch?v=FwhLf2gB3Cg" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SolutionsSection;
