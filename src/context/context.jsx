// import { createContext, useState } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [previousPrompts, setPreviousPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

// //   const onSent = async (prompt) => {
// //     // await run(prompt);
// //     if (!prompt.trim()) return;
    
// //     setLoading(true);
// //     setRecentPrompt(prompt);
// //     setPreviousPrompts((prev) => [...prev, {sender: "user", text: prompt}]);

// //     try {
// //         const response = await run(prompt);
// //         setResultData(response);
// //         setPreviousPrompts((prev) => [...prev, {sender: "ADA", text: response}]);

// //     } catch (error) {
// //         console.error("Error fetching response:", error);
// //     } finally {
// //         setLoading(false);
// //         setInput("");
// //     }
// //   };

// const onSent = async (prompt) => {
//     if (!prompt.trim()) return;
  
//     setLoading(true);
//     setRecentPrompt(prompt);
//     setPreviousPrompts((prev) => [...prev, { sender: "user", text: prompt }]);
  
//     try {
//       const response = await run(prompt);
//       setResultData(response);
//       setPreviousPrompts((prev) => [...prev, { sender: "ADA", text: response }]);
  
//       // Update messages state to include both user input and AI response
//       setMessages((prev) => [
//         ...prev,
//         { sender: "user", text: prompt },
//         { sender: "ADA", text: response },
//       ]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//     } finally {
//       setLoading(false);
//       setInput("");
//     }
//   };

//   const contextValue = {
//     previousPrompts,
//     setPreviousPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput,
//   };

//   return (
//     <Context.Provider value={contextValue}>{props.children}</Context.Provider>
//   );
// };

// export default ContextProvider;

import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [messages, setMessages] = useState([]);  // Add this line

  const onSent = async (prompt) => {
    if (!prompt.trim()) return;

    setLoading(true);
    setRecentPrompt(prompt);
    setPreviousPrompts((prev) => [...prev, { sender: "user", text: prompt }]);

    try {
      const response = await run(prompt);
      setResultData(response);
      setPreviousPrompts((prev) => [...prev, { sender: "ADA", text: response }]);

      // Update messages state to include both user input and AI response
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: prompt },
        { sender: "ADA", text: response },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    previousPrompts,
    setPreviousPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    messages,  // Add messages here
    setMessages,  // Add setMessages here
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

