import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const blogPosts = {
  1: {
    title: "The Future of AI",
    date: "Feb 09, 2025",
    content:
      "Artificial Intelligence is evolving rapidly, with innovations shaping the future of technology and society. Companies require large volumes of data to train the models that power generative AI tools, and this process has come under intense scrutiny. Concerns over companies collecting consumers’ personal data have led the FTC to open an investigation into whether OpenAI has negatively impacted consumers through its data collection methods after the company potentially violated European data protection laws. In response, the Biden-Harris administration developed an AI Bill of Rights that lists data privacy as one of its core principles. Although this legislation doesn’t carry much legal weight, it reflects the growing push to prioritize data privacy and compel AI companies to be more transparent and cautious about how they compile training data.      ",
    author: "John Doe",
    imgSrc:
      "https://i.pinimg.com/736x/56/47/aa/5647aa1b1c8918fee3bb03330d53970b.jpg",
  },
  // Add more blog posts as needed
};

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div className="text-center text-red-500">Post not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center py-18">
        <div className="w-[60%] text-left">
          <h1 className="text-4xl font-semibold text-[#1f1f1f] text-space uppercase">
            {post.title}
          </h1>
          <span className="text-gray-500 text-sm mt-2 block">
            Published on {post.date}
          </span>
          <div className="mt-8 text-gray-900 font-semibold">
            Written by {post.author}
          </div>

          <div className="mt-6 text-gray-800 leading-relaxed py-12">
            {post.content}
          </div>
          <img
            src={post.imgSrc}
            alt={post.title}
            className="w-full h-80 border border-[2.5px] border-[#0A00C8] object-cover"
          />
          <div className="mt-6 text-gray-800 leading-relaxed py-12">
            {post.content}
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
            <h3 className="text-lg text-[#1f1f1f] text-space uppercase">Share this post:</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 font-medium"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-red-600 hover:text-red-800 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
      </div>
    </>
  );
}

export default BlogPost;

// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/navbar";

// const blogPosts = {
//   1: {
//     title: "The Future of AI",
//     date: "Feb 09, 2025",
//     content:
//       "Artificial Intelligence is evolving rapidly, with innovations shaping the future of technology and society. Companies require large volumes of data to train the models that power generative AI tools, and this process has come under intense scrutiny. Concerns over companies collecting consumers’ personal data have led the FTC to open an investigation into whether OpenAI has negatively impacted consumers through its data collection methods after the company potentially violated European data protection laws. In response, the Biden-Harris administration developed an AI Bill of Rights that lists data privacy as one of its core principles. Although this legislation doesn’t carry much legal weight, it reflects the growing push to prioritize data privacy and compel AI companies to be more transparent and cautious about how they compile training data.      ",
//     author: "John Doe",
//     imgSrc:
//       "https://i.pinimg.com/736x/56/47/aa/5647aa1b1c8918fee3bb03330d53970b.jpg",
//   },
//   // Add more blog posts as needed
// };

// function BlogPost() {
//   const { id } = useParams();
//   const post = blogPosts[id];

//   if (!post) {
//     return <div className="text-center text-red-500">Post not found.</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="w-full flex justify-center pt-18">
//         <div className="w-[80%] text-left">
//           <h1 className="text-4xl font-semibold text-[#1f1f1f] text-space uppercase">
//             {post.title}
//           </h1>
//           <span className="text-gray-500 text-sm mt-2 block">
//             Published on {post.date}
//           </span>
//           <div className="mt-8 text-gray-900 font-semibold">
//             Written by {post.author}
//           </div>

//           <div className="mt-6 text-gray-800 leading-relaxed py-12">
//             {post.content}
//           </div>
//           <img
//             src={post.imgSrc}
//             alt={post.title}
//             className="w-full h-80 border border-[2.5px] border-[#0A00C8] object-cover"
//           />
//           <div className="mt-6 text-gray-800 leading-relaxed py-12">
//             {post.content}
//           </div>
//         </div>        
//       </div>
//       <div className="mt-10 px-8">
//             <h3 className="text-lg text-[#1f1f1f] text-space uppercase">Share this post:</h3>
//             <div className="flex space-x-4 mt-4">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 font-medium"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="#"
//                 className="text-blue-400 hover:text-blue-600 font-medium"
//               >
//                 Twitter
//               </a>
//               <a
//                 href="#"
//                 className="text-red-600 hover:text-red-800 font-medium"
//               >
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//           <br /><br /><br /><br />
//     </>
//   );
// }

// export default BlogPost;
