// import React, { useState, useEffect, useRef, useContext } from "react";
// import { Send } from "lucide-react";
// import Navbar from "./components/navbar";
// import { Context } from "./context/context";

// function GlitchText({ text, interval = 100, duration = 1000 }) {
//   const [glitchedText, setGlitchedText] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
//   useEffect(() => {
//     let timeout;
//     let startTime = Date.now();

//     const glitchEffect = () => {
//       if (Date.now() - startTime > duration) {
//         setGlitchedText(text);
//         return;
//       }
      
//       setGlitchedText((prevText) => {
//         return prevText.split(" ").map((word) => {
//           return word
//             .split("")
//             .map((char) => (Math.random() < 0.3 ? chars[Math.floor(Math.random() * chars.length)] : char))
//             .join("");
//         }).join(" ");
//       });
      
//       timeout = setTimeout(glitchEffect, interval + Math.random() * 300);
//     };

//     glitchEffect();

//     return () => clearTimeout(timeout);
//   }, [text, interval, duration]);

//   return <span>{glitchedText}</span>;
// }

// function ADA() {
//   const { onSent, messages, setInput, input } = useContext(Context);
//   const chatRef = useRef(null);
//   const [hasInteracted, setHasInteracted] = useState(false);

//   useEffect(() => {
//     chatRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <>
//       <Navbar />

//       <div className="w-full flex flex-col items-center pt-16 px-8"> 
//         <div className="w-full max-w-2xl h-[80vh] flex flex-col border border-[#1f1f1f] rounded-lg overflow-hidden">
          
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {!hasInteracted && (
//               <div className="text-left text-[#1f1f1f] fade-out">
//                 <h1 className="text-[3em] text-space font-semibold">
//                   [<GlitchText text="HI THERE, THIS IS " duration={1000} />
//                   <span className="text-[#0A00C8]"><GlitchText text="ADA." duration={2000} />]</span>
//                 </h1>
//                 <h2 className="text-[2em] text-space font-semibold">
//                   <GlitchText text="WHAT WOULD YOU LIKE TO KNOW?" duration={3000} />
//                 </h2>
//                 <p className="text-[1.3em] text-pixel mt-3">
//                   Type in the chat to begin the experience.
//                 </p>
//               </div>
//             )}

//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`px-4 py-2 max-w-xs rounded-lg ${msg.sender === "user" ? "bg-[#1f1f1f] text-[#F6F7F9]" : "bg-gray-200 text-[#1f1f1f]"}`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             <div ref={chatRef}></div>
//           </div>

//           <div className="border-t border-[#1f1f1f] flex items-center p-3 bg-white">
//             <input
//               type="text"
//               className="flex-1 p-2 outline-none text-lg bg-transparent"
//               placeholder="ASK SOMETHING..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   onSent(input);
//                   setHasInteracted(true);
//                 }
//               }}
//             />
//             <button
//               className="p-2 text-[#1f1f1f]"
//               onClick={() => {
//                 onSent(input);
//                 setHasInteracted(true);
//               }}
//             >
//               <Send size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ADA;

import React, { useState, useEffect, useRef, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Send } from "lucide-react";
import Navbar from "./components/navbar";
import { Context } from "./context/context";

function GlitchText({ text, duration = 1000 }) {
  const [glitchedText, setGlitchedText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
  useEffect(() => {
    let timeout;
    let startTime = Date.now();
    
    const glitchEffect = () => {
      if (Date.now() - startTime > duration) {
        setGlitchedText(text);
        return;
      }
      
      setGlitchedText(text.split("").map((char) =>
        Math.random() < 0.3 ? chars[Math.floor(Math.random() * chars.length)] : char
      ).join(""));
      
      timeout = setTimeout(glitchEffect, 100 + Math.random() * 200);
    };

    glitchEffect();
    return () => clearTimeout(timeout);
  }, [text, duration]);

  return <span>{glitchedText}</span>;
}

function ADA() {
  const { onSent, messages, setInput, input } = useContext(Context);
  const chatRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickPrompts = [
    "What can you do?",
    "Tell me about AI-SOLUTION.",
    "How can I get started?",
  ];

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center pt-16 px-8">
        <div className="w-full max-w-2xl h-[80vh] flex flex-col">
          {!hasInteracted ? (
            <div className="pt-16 space-y-4">
              <h1 className="text-[3em] font-semibold text-space">
                [<GlitchText text="HI THERE, THIS IS " />
                <span className="text-[#0A00C8]"><GlitchText text="ADA." duration={2000} /></span>]
              </h1>
              <h2 className="text-[2em] font-semibold text-space line-special">
                <GlitchText text="WHAT WOULD YOU LIKE TO KNOW?" duration={3000} />
              </h2>
              <p className="text-lg text-pixel">Use one of the common prompts or type your own.</p>
              <div className="flex flex-row gap-4 space-y-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-transparent uppercase text-space border-[1.2px] border-[#1f1f1f] hover:border-[#0A00C8]"
                    onClick={() => {
                      onSent(prompt);
                      setHasInteracted(true);
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-4 py-2 max-w-xs rounded-lg ${msg.sender === "user" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              <div ref={chatRef}></div>
            </div>
          )}

          <div className="border-1 flex items-center p-3 bg-white mt-4">
            <input
              type="text"
              className="flex-1 p-2 outline-none text-lg bg-transparent"
              placeholder="ASK SOMETHING..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent(input);
                  setHasInteracted(true);
                }
              }}
            />
            <button
              className="p-2 text-gray-800"
              onClick={() => {
                onSent(input);
                setHasInteracted(true);
              }}
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADA;
