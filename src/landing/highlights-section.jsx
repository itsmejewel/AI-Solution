import React, { useRef, useEffect, useState } from "react";

function HighlightsSection() {
  const containerRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false); // Track if at the last highlight

  const highlights = [
    {
      title: "PREDICTIVE MAINTENANCE FOR A MANUFACTURING PLANT",
      date: "2025/06/07",
      cost: "$1,500",
      imgSrc: "/src/assets/HL1.jpg",
    },
    {
      title: "REAL-TIME DATA ANALYTICS FOR SUPPLY CHAIN",
      date: "2025/07/15",
      cost: "$2,000",
      imgSrc: "/src/assets/HL2.jpg",
    },
    {
      title: "AUTOMATED INSPECTION USING AI",
      date: "2025/08/22",
      cost: "$1,750",
      imgSrc: "/src/assets/HL4.jpg",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

      const sectionHeight = clientHeight * 0.9;
      const index = Math.floor(scrollTop / sectionHeight);
      setActiveIndex(index);

      // Check if we've reached the end of the last highlight
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setAtEnd(true);
      } else {
        setAtEnd(false);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleWheel = (e) => {
    if (atEnd && e.deltaY > 0) {
      // Prevent the inner div from trapping the scroll
      containerRef.current.style.overflowY = "hidden";
      window.scrollBy(0, e.deltaY);
    } else {
      containerRef.current.style.overflowY = "auto";
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-6 ">
      <div className="w-full text-center py-4 text-lg text-[#1f1f1f] font-semibold">
        (HIGHLIGHTS)
      </div>
      <div className="w-full text-center border-t-1 border-[#1f1f1f]">
        <h2 className="text-xl font-semibold text-space mt-3">
          {highlights[activeIndex].title}
        </h2>
        <div className="flex justify-between text-gray-500 text-md px-10">
          <span>{highlights[activeIndex].date}</span>
          <span>{highlights[activeIndex].cost}</span>
        </div>
      </div>

      {/* Scrollable Image Links */}
      <div
        ref={containerRef}
        className="w-full h-[78vh] overflow-y-auto snap-y snap-mandatory relative no-scrollbar cursor-none"
        onWheel={handleWheel}
      >
        {highlights.map((item, i) => (
          <div
            key={i}
            className="relative w-full h-[90vh] snap-center overflow-hidden cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={item.imgSrc}
              alt={`Highlight ${i + 1}`}
              className="parallax-img w-full h-full object-cover transition-transform duration-500 cursor-none"
              style={{
                transform: `translateY(${(activeIndex - i) * 50}px)`,
              }}
            />
            <a href="/highlights" className="absolute inset-0"></a>
          </div>
        ))}
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none text-[#ffffff] transition-transform duration-300"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isHovering ? 1 : 0,
        }}
      >
        (DETAILS)
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

export default HighlightsSection;

