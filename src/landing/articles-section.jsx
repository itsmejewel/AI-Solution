import React, { useState } from "react";

const blogPosts = {
  "ALL": [
    { id: 1, title: "THE FUTURE OF AI", date: "FEB 09, 2025", imgSrc: "https://i.pinimg.com/736x/96/20/4f/96204f926eaaa948f7a87c4bc14a229f.jpg", link: "/blog/1" },
    { id: 2, title: "ETHICS IN MACHINE LEARNING", date: "JAN 25, 2025", imgSrc: "https://i.pinimg.com/736x/56/47/aa/5647aa1b1c8918fee3bb03330d53970b.jpg", link: "/blog/2" },
    { id: 3, title: "NEURAL NETWORKS EXPLAINED", date: "DEC 18, 2024", imgSrc: "https://i.pinimg.com/736x/10/5b/bb/105bbb60699c6e9eb5c29079665920e8.jpg", link: "/blog/3" },
  ],
  "ARTIFICIAL INTELLIGENCE": [
    { id: 1, title: "THE FUTURE OF AI", date: "FEB 09, 2025", imgSrc: "/src/assets/blog1.jpg", link: "/blog/future-of-ai" },
  ],
  "BLOCKCHAIN": [
    { id: 1, title: "EXPLORING BLOCKCHAIN SECURITY", date: "MAR 05, 2025", imgSrc: "/src/assets/blog4.jpg", link: "/blog/blockchain-security" },
  ],
};

function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <section className="relative w-full flex flex-col items-center py-16 mt-10">
      {/* Articles Title & Filter Menu */}
      <div className="w-full flex justify-between items-start px-16">
        <h2 className="text-[3em] text-space text-[#1f1f1f] font-semibold text-right w-3/5">ARTICLES</h2>
        <div className="w-1/5 text-left">
          <div className="text-lg text-[#1f1f1f] text-space font-bold pb-5">FILTERS</div>
          {Object.keys(blogPosts).map((category) => (
            <div
              key={category}
              className={`cursor-pointer text-space my-1 ${
                activeCategory === category ? "text-[#0A00C8]" : "text-[#1f1f1f]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <hr className="mb-2 line-color" />
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-16 mt-8">
        {blogPosts[activeCategory].map((post, index) => (
          <div key={post.id} className="flex flex-col">
            <hr className="mb-2" />
            <div className="flex justify-between">
              <span className="text-lg text-space text-[#1f1f1f] font-semibold ">{String(index + 1).padStart(2, "0")}</span>
              <a href={post.link} className="text-lg text-space text-[#1f1f1f] font-semibold ">
                {post.title}
              </a>
            </div>
            <hr className="my-2" />
            <span className="text-gray-500 text-sm text-right">PUBLISHED {post.date}</span>
            <a href={post.link} className="no-glitch">
              <img src={post.imgSrc} alt={post.title} className="mt-2 w-full h-48 object-cover" />
            </a>
          </div>
        ))}
      </div>

      {/* CSS for Pixelated Effect Only on Filters */}
      <style>
        {`

          /* Ensure images don't get affected by global effects */
          .no-glitch img {
            transition: none;
            filter: none !important;
          }
        `}
      </style>
    </section>
  );
}

export default ArticlesSection;

// import React, { useState } from "react";

// const blogPosts = {
//   "ALL": [
//     { id: 1, title: "THE FUTURE OF AI", date: "FEB 09, 2025", imgSrc: "https://i.pinimg.com/736x/96/20/4f/96204f926eaaa948f7a87c4bc14a229f.jpg", link: "/blog/1" },
//     { id: 2, title: "ETHICS IN MACHINE LEARNING", date: "JAN 25, 2025", imgSrc: "https://i.pinimg.com/736x/56/47/aa/5647aa1b1c8918fee3bb03330d53970b.jpg", link: "/blog/2" },
//     { id: 3, title: "NEURAL NETWORKS EXPLAINED", date: "DEC 18, 2024", imgSrc: "https://i.pinimg.com/736x/10/5b/bb/105bbb60699c6e9eb5c29079665920e8.jpg", link: "/blog/3" },
//   ],
//   "ARTIFICIAL INTELLIGENCE": [
//     { id: 1, title: "THE FUTURE OF AI", date: "FEB 09, 2025", imgSrc: "/src/assets/blog1.jpg", link: "/blog/future-of-ai" },
//   ],
//   "BLOCKCHAIN": [
//     { id: 1, title: "EXPLORING BLOCKCHAIN SECURITY", date: "MAR 05, 2025", imgSrc: "/src/assets/blog4.jpg", link: "/blog/blockchain-security" },
//   ],
// };

// function ArticlesSection() {
//   const [activeCategory, setActiveCategory] = useState("ALL");

//   return (
//     <section className="relative w-full flex flex-col items-center py-16 mt-10">
//       {/* Articles Title & Filter Menu */}
//       <div className="w-full flex flex-col md:flex-row justify-start items-start px-8 md:px-16">
//         <h2 className="text-[3em] text-space text-[#1f1f1f] font-semibold text-left w-full md:w-3/5">ARTICLES</h2>
//         <div className="w-full md:w-1/5 text-left mt-8 md:mt-0">
//           <div className="text-lg text-[#1f1f1f] text-space font-bold pb-5">FILTERS</div>
//           {Object.keys(blogPosts).map((category) => (
//             <div
//               key={category}
//               className={`cursor-pointer text-space my-1 ${activeCategory === category ? "text-[#0A00C8]" : "text-[#1f1f1f]"}`}
//               onClick={() => setActiveCategory(category)}
//             >
//               <hr className="mb-2 line-color" />
//               {category}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blog Posts */}
//       <div className="w-full flex flex-col gap-8 px-8 md:px-16 mt-8">
//         {blogPosts[activeCategory].map((post, index) => (
//           <div key={post.id} className="flex flex-col">
//             <hr className="mb-2" />
//             <div className="flex justify-between">
//               <span className="text-lg text-space text-[#1f1f1f] font-semibold">{String(index + 1).padStart(2, "0")}</span>
//               <a href={post.link} className="text-lg text-space text-[#1f1f1f] font-semibold">
//                 {post.title}
//               </a>
//             </div>
//             <hr className="my-2" />
//             <span className="text-gray-500 text-sm text-right">PUBLISHED {post.date}</span>
//             <a href={post.link} className="no-glitch">
//               <img src={post.imgSrc} alt={post.title} className="mt-2 w-full h-48 object-cover" />
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* CSS for Pixelated Effect Only on Filters */}
//       <style>
//         {`
//           /* Ensure images don't get affected by global effects */
//           .no-glitch img {
//             transition: none;
//             filter: none !important;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default ArticlesSection;
