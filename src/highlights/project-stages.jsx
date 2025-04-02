import React, { useState } from "react";

function ProjectStages() {
  const stages = [
    {
      number: "[ 01 ]",
      title: "ASSESSMENT & DATA COLLECTION",
      width: "w-[90%]",
      details: "Before implementing predictive maintenance, we conducted a comprehensive assessment of the manufacturing plant's operations. Our team identified key assets prone to unexpected failures, including industrial motors, conveyors, and cooling systems. We installed IoT sensors to collect real-time data on vibration, temperature, and energy consumption, ensuring a robust dataset for analysis. Historical maintenance logs were also reviewed to identify recurring failure patterns.",
    },
    { number: "[ 02 ]", 
      title: "DATA PROCESSING & ANALYSIS",
      width: "w-[80%]", 
      details: "Once data was collected, it was cleansed and structured for analysis. Our system filtered out noise and inconsistencies to ensure accuracy. Using statistical methods and exploratory data analysis, we identified early warning indicators for mechanical failures. Anomalous patterns in temperature fluctuations and vibration intensity revealed previously undetected wear-and-tear, allowing for targeted predictive insights.",
    },
    {
      number: "[ 03 ]",
      title: "MODEL DEVELOPMENT & TRAINING",
      width: "w-[70%]",
      details: "With the refined dataset, we developed machine learning models to predict potential equipment failures. A combination of supervised learning techniques and deep learning models was used to classify failure types and estimate time-to-failure. The models were trained on historical sensor readings and validated using cross-validation techniques, achieving an initial accuracy of 92% in failure prediction.",
    },
    { 
      number: "[ 04 ]", 
      title: "SYSTEM INTEGRATION", 
      width: "w-[60%]",
      details: "To seamlessly incorporate predictive maintenance into daily operations, we integrated the trained models with the plant’s existing SCADA system. An intuitive dashboard was developed, allowing engineers to receive real-time alerts and visual insights. Automated work order generation was also introduced, ensuring that maintenance teams could proactively address potential failures before they led to downtime.",
    },
    { 
      number: "[ 05 ]", 
      title: "TESTING & OPTIMIZATION", 
      width: "w-[50%]",
      details: "The system underwent rigorous testing under real-world conditions to validate accuracy and reliability. Edge cases, such as sensor malfunctions and extreme environmental conditions, were simulated to assess system resilience. Model parameters were fine-tuned based on test results, improving predictive accuracy to 96% and reducing false positives.",
    },

    { number: "[ 06 ]", 
      title: "DEPLOYMENT & MONITORING", 
      width: "w-[40%]",
      details: "The predictive maintenance system was fully deployed across the manufacturing plant, enabling continuous monitoring of critical assets. A feedback loop was established where real-time performance data was fed back into the model, allowing for ongoing improvements. Within the first six months, unplanned downtime was reduced by 40%, and maintenance costs decreased by 25%, proving the effectiveness of the solution.",
    },
  ];

  const [hoveredStage, setHoveredStage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX + 15, y: event.clientY + 15 }); // Offset to avoid overlap
  };

  const handleMouseEnter = (index) => {
    setHoveredStage(index);
  };

  const handleMouseLeave = () => {
    setHoveredStage(null);
  };

  return (
    <>
      <div className="px-8 py-12 relative">
        {/* Title */}
        <div className="flex items-center">
          <h3 className="text-[1.3em] text-[#0A00C8] text-space font-semibold mb-2">
            [ 02 ]
          </h3>
          <div className="text-center ps-12">
            <h2 className="text-pixel text-[3.8em] text-[#1f1f1f] text-right font-semibold">
              STAGES
            </h2>
            <h2 className="text-[3.8em] text-[#1f1f1f] font-semibold text-space line-special text-left">
              OF THE PROJECT
            </h2>
          </div>
        </div>

        {/* Stages */}
        <div className="mt-8 space-y-6 pt-12 flex flex-col items-end cursor-crosshair">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="flex flex-col items-end w-full relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div
                className={`flex items-center ${stage.width} justify-between`}
              >
                <span className="text-right text-lg text-[#0A00C8] text-space font-semibold">
                  {stage.title}
                </span>
                <span className="text-[#0A00C8] font-semibold ml-4">
                  {stage.number}
                </span>
              </div>
              <div
                className={`${stage.width} border-t-1 border-[#1f1f1f] mt-2`}
              ></div>
            </div>
          ))}
        </div>

        {/* Floating Pop-up */}
        {hoveredStage !== null && (
          <div
            className="absolute bg-white shadow-lg p-4 border border-gray-300 rounded-md text-sm transition-opacity duration-200 pointer-events-none"
            style={{
              top: position.y,
              left: position.x,
              transform: "translate(-50%, -50%)",
            }}
          >
            <h3 className="font-bold">{stages[hoveredStage].title}</h3>
            <p className="text-space">{stages[hoveredStage].details}</p>
          </div>
        )}
      </div>
      <br /><br /><br /><br /><br />
    </>
  );
}

export default ProjectStages;

// import React, { useState } from "react";

// function ProjectStages() {
//   const stages = [
//     {
//       number: "[ 01 ]",
//       title: "ASSESSMENT & DATA COLLECTION",
//       width: "w-[90%]",
//       details: "Before implementing predictive maintenance, we conducted a comprehensive assessment of the manufacturing plant's operations. Our team identified key assets prone to unexpected failures, including industrial motors, conveyors, and cooling systems. We installed IoT sensors to collect real-time data on vibration, temperature, and energy consumption, ensuring a robust dataset for analysis. Historical maintenance logs were also reviewed to identify recurring failure patterns.",
//     },
//     {
//       number: "[ 02 ]",
//       title: "DATA PROCESSING & ANALYSIS",
//       width: "w-[80%]",
//       details: "Once data was collected, it was cleansed and structured for analysis. Our system filtered out noise and inconsistencies to ensure accuracy. Using statistical methods and exploratory data analysis, we identified early warning indicators for mechanical failures. Anomalous patterns in temperature fluctuations and vibration intensity revealed previously undetected wear-and-tear, allowing for targeted predictive insights.",
//     },
//     {
//       number: "[ 03 ]",
//       title: "MODEL DEVELOPMENT & TRAINING",
//       width: "w-[70%]",
//       details: "With the refined dataset, we developed machine learning models to predict potential equipment failures. A combination of supervised learning techniques and deep learning models was used to classify failure types and estimate time-to-failure. The models were trained on historical sensor readings and validated using cross-validation techniques, achieving an initial accuracy of 92% in failure prediction.",
//     },
//     {
//       number: "[ 04 ]",
//       title: "SYSTEM INTEGRATION",
//       width: "w-[60%]",
//       details: "To seamlessly incorporate predictive maintenance into daily operations, we integrated the trained models with the plant’s existing SCADA system. An intuitive dashboard was developed, allowing engineers to receive real-time alerts and visual insights. Automated work order generation was also introduced, ensuring that maintenance teams could proactively address potential failures before they led to downtime.",
//     },
//     {
//       number: "[ 05 ]",
//       title: "TESTING & OPTIMIZATION",
//       width: "w-[50%]",
//       details: "The system underwent rigorous testing under real-world conditions to validate accuracy and reliability. Edge cases, such as sensor malfunctions and extreme environmental conditions, were simulated to assess system resilience. Model parameters were fine-tuned based on test results, improving predictive accuracy to 96% and reducing false positives.",
//     },
//     {
//       number: "[ 06 ]",
//       title: "DEPLOYMENT & MONITORING",
//       width: "w-[40%]",
//       details: "The predictive maintenance system was fully deployed across the manufacturing plant, enabling continuous monitoring of critical assets. A feedback loop was established where real-time performance data was fed back into the model, allowing for ongoing improvements. Within the first six months, unplanned downtime was reduced by 40%, and maintenance costs decreased by 25%, proving the effectiveness of the solution.",
//     },
//   ];

//   return (
//     <div className="px-6 py-12">
//       {/* Title */}
//       <div className="flex items-center flex-col md:flex-row text-center md:text-left">
//         <h3 className="text-[1.3em] text-[#0A00C8] text-space font-semibold mb-2 md:mb-0">[ 02 ]</h3>
//         <div className="ps-4">
//           <h2 className="text-pixel text-[4em] text-[#1f1f1f] font-semibold line-special">STAGES</h2>
//           <h2 className="text-[3.8em] text-[#1f1f1f] font-semibold text-space ">OF THE PROJECT</h2>
//         </div>
//       </div>

//       {/* Stages */}
//       <div className="mt-8 space-y-6 flex flex-col md:items-end">
//         {stages.map((stage, index) => (
//           <div key={index} className="w-full border-b border-[#1f1f1f] pb-4">
//             <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
//               <span className="text-lg text-[#0A00C8] text-space font-semibold mb-2 md:mb-0">
//                 {stage.number} {stage.title}
//               </span>
//             </div>
//             <p className="text-sm text-gray-700 mt-2">{stage.details}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectStages;
