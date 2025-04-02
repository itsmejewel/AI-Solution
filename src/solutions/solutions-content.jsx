import React, { useEffect, useState } from "react";

function SolutionsContent() {
  return (
    <>
      <div className="flex justify-end">
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {" "}
          {/* Grid with 2 columns */}
          {/* Overview Column */}
          <div>
            <h3 className="text-[1.2em] text-space mb-2">OVERVIEW</h3>
            <p className="text-regular leading-relaxed">
              AI-DRIVEN AUTOMATION IS REVOLUTIONIZING ENGINEERING AND
              MANUFACTURING BY ENHANCING EFFICIENCY, PRECISION, AND SCALABILITY.
              OUR SOLUTIONS INTEGRATE AI INTO MANUFACTURING WORKFLOWS TO
              OPTIMIZE PRODUCTION, MINIMIZE WASTE, AND ENSURE HIGH-QUALITY
              OUTPUTS.
            </p>
          </div>
          {/* The Work Column */}
          <div>
            <h3 className="text-[1.2em] text-space mb-2">THE WORK</h3>
            <p className=" text-regular">
              <strong>AUTOMATED QUALITY INSPECTION</strong>
              <br />
              AI-POWERED VISION SYSTEMS TO DETECT DEFECTS IN REAL TIME, REDUCING
              MANUAL INSPECTION COSTS.
            </p>
            <br />
            <p className=" text-regular">
              <strong>PREDICTIVE MAINTENANCE</strong>
              <br />
              DEVELOPED ML MODELS TO ANTICIPATE EQUIPMENT FAILURES.
            </p>
            <br />
            <p className=" text-regular">
              <strong>ROBOTIC PROCESS AUTOMATION (RPA)</strong>
              <br />
              AUTOMATED REPETITIVE MANUFACTURING TASKS, INCREASING THROUGHPUT
              WHILE REDUCING HUMAN ERROR.
            </p>
            <br />
            {/* <Link to="/contact" className="underline text-lg">INTERESTED? CONTACT US</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionsContent;
