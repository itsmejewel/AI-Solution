import React from "react";

const pressPosts = [
  {
    id: 1,
    title: ": HOW AI-SOLUTION HAS TRANSFORMED THE MANUFACTURING INDUSTRY",
    date: "MAR 10, 2025",
    imgSrc: "https://i.pinimg.com/originals/34/ac/31/34ac31c2ab7103586c407ec93ee15e7d.gif",
  },
  {
    id: 2,
    title: ": AUTOMATION BREAKTHROUGH IN UK BASED COMPANY AI-SOLUTION",
    date: "MAR 15, 2025",
    imgSrc: "https://i.pinimg.com/originals/4b/37/e6/4b37e6afdffdabb88c8fa526c5479efc.gif",
  },
  {
    id: 3,
    title: ": FUTURE OF AI IN ENGINEERING PIONEERED BY AI-SOLUTION",
    date: "MAR 20, 2025",
    imgSrc: "https://i.pinimg.com/originals/c3/5f/7e/c35f7e3873379ab3cad30980183bccc8.gif",
  },
];

function PressSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-16 mt-10">
      {/* Press Title */}
      <div className="w-full">
        <h3 className="text-left text-medium font-semibold mb-4">(PRESS)</h3>
      </div>

      {/* Press Posts */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-16 mt-8">
        {pressPosts.map((post, index) => (
          <div key={post.id} className="flex flex-col">
            <hr className="mb-2" />
            <div className="flex justify-between">
              <span className="text-lg text-space text-[#1f1f1f] font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-space text-[#1f1f1f] font-semibold">
                {post.title}
              </span>
            </div>
            <hr className="my-2" />
            <span className="text-gray-500 text-sm text-right">
              PUBLISHED {post.date}
            </span>
            <img
              src={post.imgSrc}
              alt={post.title}
              className="mt-2 w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PressSection;
