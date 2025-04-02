import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI",
    date: "Feb 09, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/96/20/4f/96204f926eaaa948f7a87c4bc14a229f.jpg",
  },
  {
    id: 2,
    title: "Ethics in Machine Learning",
    date: "Jan 25, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/56/47/aa/5647aa1b1c8918fee3bb03330d53970b.jpg",
  },
  {
    id: 3,
    title: "Neural Networks Explained",
    date: "Dec 18, 2024",
    imgSrc:
      "https://i.pinimg.com/736x/10/5b/bb/105bbb60699c6e9eb5c29079665920e8.jpg",
  },
  {
    id: 4,
    title: "Blockchain Security",
    date: "Mar 05, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/86/b2/2b/86b22b4b7d80c49ffc6d22562d8d676e.jpg",
  },
  {
    id: 5,
    title: "Quantum Computing Breakthroughs",
    date: "Apr 12, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/3c/e2/f4/3ce2f45b6584f8bf3e1d8eaf75493a02.jpg",
  },
  {
    id: 6,
    title: "Deep Learning Advances",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/fe/11/0c/fe110c43820227d5f3863f01642f2fdf.jpg",
  },
  {
    id: 7,
    title: "Deep Learning Advances",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/53/35/00/533500a7dce8c51f36cab2c39652de69.jpg",
  },
  {
    id: 8,
    title: "Deep Learning Advances",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/c6/c3/ed/c6c3ed9112c93df1359c285764352811.jpg",
  },
  {
    id: 9,
    title: "Deep Learning Advances",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/26/6c/25/266c251c03e83230bc405bc538776c54.jpg",
  },
  {
    id: 10,
    title: "Blockchain ins and outs",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/44/ca/f3/44caf3e552c123ce3e2ba3836b00770c.jpg",
  },
  {
    id: 11,
    title: "Blockchain Future",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/99/1d/02/991d02ba608c814b41bbbc148c6f774a.jpg",
  },
  {
    id: 12,
    title: "O Dear Miner ",
    date: "May 22, 2025",
    imgSrc:
      "https://i.pinimg.com/736x/24/c1/c2/24c1c2daa0a5f18d48b41f29a8dced80.jpg",
  },
];

function Archive() {
  return (
    <div className="w-full flex flex-col items-center pt-16 px-8">
      {/* Header Section */}
      <h1 className="text-[3.5em] font-semibold text-center text-[#1f1f1f] text-space">
        AI-SOLUTION:
      </h1>
      <h2 className="text-[3.5em] font-semibold text-center text-[#1f1f1f] text-space ">
        BLOG POST ARCHIVES
      </h2>
      <p className="text-center font-semibold text-[#1f1f1f] text-space max-w-2xl mt-4">
        (SEPTEMBER 2023 - DECEMBER 2024)
      </p>
      <p className="text-center text-[#1f1f1f] max-w-3xl mt-4 text-space">
        A collection of our best insights, research, and thoughts on artificial
        intelligence, machine learning, and technology innovation.
      </p>

      {/* Top 4 Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
        {blogPosts.slice(0, 4).map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="flex flex-col cursor-crosshair"
          >
            <img
              src={post.imgSrc}
              alt={post.title}
              className="w-full h-80 border border-[2.5px] border-[#0A00C8] object-cover"
            />
            <span className="text-[#1f1f1f] text-sm mt-2 uppercase">
              {post.date}
            </span>
            <h3 className="text-lg font-bold text-[#1f1f1f] mt-1 uppercase line-special">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="border-t-2 border-[#1f1f1f] my-8 w-full"></div>

      {/* Header Section */}
      <h1 className="text-[2.5em] font-semibold text-center text-[#1f1f1f] text-space">
        AI TRENDS
      </h1>
      <p className="text-center font-semibold text-[#1f1f1f] text-space max-w-2xl mt-4">
        (SEPTEMBER 2023 - DECEMBER 2024)
      </p>
      <p className="text-center text-[#1f1f1f] max-w-3xl mt-4 text-space">
        A collection of our best insights, research, and thoughts on artificial
        intelligence, machine learning, and technology innovation.
      </p>

      {/* Scrollable Section for More Blog Posts */}
      <div className="w-full  overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-6 py-4 overflow-auto">
        <div className="flex gap-6 w-max px-4">
          {blogPosts.slice(4).map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="flex flex-col cursor-crosshair min-w-[300px]"
            >
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-[300px] h-60 border border-[2.5px] border-[#0A00C8] object-cover"
              />
              <span className="text-[#1f1f1f] text-sm mt-2 uppercase">
                {post.date}
              </span>
              <h3 className="text-lg font-bold text-[#1f1f1f] mt-1 uppercase line-special">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t-2 border-[#1f1f1f] my-8 w-full"></div>

      {/* Header Section */}
      <h1 className="text-[2.5em] font-semibold text-center text-[#1f1f1f] text-space">
        ON BLOCKCHAIN
      </h1>
      <p className="text-center font-semibold text-[#1f1f1f] text-space max-w-2xl mt-4">
        (SEPTEMBER 2023 - DECEMBER 2024)
      </p>
      <p className="text-center text-[#1f1f1f] max-w-3xl mt-4 text-space">
        A collection of our best insights, research, and thoughts on artificial
        intelligence, machine learning, and technology innovation.
      </p>

      {/* Scrollable Section for More Blog Posts */}
      <div className="w-full  overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-6 py-4">
        <div className="flex gap-6 w-max px-4">
          {blogPosts.slice(9).map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="flex flex-col cursor-crosshair min-w-[300px]"
            >
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-[300px] h-60 border border-[2.5px] border-[#0A00C8] object-cover"
              />
              <span className="text-[#1f1f1f] text-sm mt-2 uppercase">
                {post.date}
              </span>
              <h3 className="text-lg font-bold text-[#1f1f1f] mt-1 uppercase line-special">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;
