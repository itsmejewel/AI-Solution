import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { sendEmail } from "../config/emailService";
// import Navbar from "./navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    job: "",
    country: "",
    jobDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setMessage("");

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email address.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), formData);

      await sendEmail(formData);

      toast.success("Your message has been sent!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        job: "",
        country: "",
        jobDetails: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <section
        className="w-full px-10 flex flex-col gap-12 text-[#1f1f1f]"
        id="contact-inquiry"
      >
        <h1 className="text-large font-semibold">CONTACT US</h1>

        <div className="flex justify-between w-full">
          {/* LEFT SIDE */}
          <div className="w-1/2">
            <p className="text-regular w-3/4">
              HAVE QUESTIONS? NEED A CUSTOM SOLUTION? WE’D LOVE TO HEAR FROM
              YOU!
            </p>

            <div className="mt-5">
              <p className="text-gray-500">SOCIAL MEDIA</p>
              <p className="text-lg mt-2 text-[#1f1f1f]">
                X - INSTAGRAM - GITHUB
              </p>
            </div>

            <div className="mt-5">
              <p className="text-gray-500">GET IN TOUCH</p>
              <p className="text-lg mt-2 text-[#1f1f1f]">
                AISOLUTIONS.SUNDERLAND@GMAIL.COM
              </p>
            </div>

            <div className="mt-5">
              <p className="text-gray-500">LOCATION</p>
              <div style={{ width: "100%" }}>
                <iframe
                  width="75%"
                  height="300"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Sunderland+(AI-Solution)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Location Map"
                >
                  <a href="https://www.gps.ie/collections/drones/">gps drone</a>
                </iframe>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form className="w-1/2 flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex gap-10">
              <div className="relative w-1/2">
                <label
                  className={`absolute top-0 left-0 text-sm transition-all ${
                    formData.name ? "opacity-0" : "opacity-100"
                  }`}
                >
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
                  required
                />
              </div>

              <div className="relative w-1/2">
                <label
                  className={`absolute top-0 left-0 text-sm transition-all ${
                    formData.email ? "opacity-0" : "opacity-100"
                  }`}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
                  required
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="relative w-1/2">
                <label
                  className={`absolute top-0 left-0 text-sm transition-all ${
                    formData.phone ? "opacity-0" : "opacity-100"
                  }`}
                >
                  PHONE
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
                  required
                />
              </div>

              <div className="relative w-1/2">
                <label
                  className={`absolute top-0 left-0 text-sm transition-all ${
                    formData.company ? "opacity-0" : "opacity-100"
                  }`}
                >
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
                  required
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="relative w-1/2">
                <label
                  className={`absolute top-0 left-0 text-sm transition-all ${
                    formData.job ? "opacity-0" : "opacity-100"
                  }`}
                >
                  JOB
                </label>
                <input
                  type="text"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
                  required
                />
              </div>

              <div className="relative w-1/2">
                <label
                  className={`absolute top-0 left-0 text-sm transition-all ${
                    formData.country ? "opacity-0" : "opacity-100"
                  }`}
                >
                  COUNTRY
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
                  required
                />
              </div>
            </div>

            <div className="relative mt-6">
              <label
                className={`absolute top-0 left-0 text-sm transition-all ${
                  formData.jobDetails ? "opacity-0" : "opacity-100"
                }`}
              >
                JOB DETAILS
              </label>
              <textarea
                name="jobDetails"
                value={formData.jobDetails}
                onChange={handleChange}
                rows="4"
                className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer font-semibold text-large"
              disabled={loading}
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>

            {message && <p className="text-green-500 mt-2">{message}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { db } from "../config/firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { sendEmail } from "../config/emailService";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     job: "",
//     country: "",
//     jobDetails: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const validateEmail = (email) => {
//     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!validateEmail(formData.email)) {
//       toast.error("Invalid email address.");
//       setLoading(false);
//       return;
//     }

//     try {
//       await addDoc(collection(db, "contacts"), formData);

//       await sendEmail(formData);

//       toast.success("Your message has been sent!");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         job: "",
//         country: "",
//         jobDetails: "",
//       });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       toast.error("Failed to send message. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="w-full py-12 px-10 flex flex-col gap-12 text-[#1f1f1f]" id="contact-inquiry">
//       <h1 className="text-large font-semibold">CONTACT US</h1>

//       <div className="flex flex-col-reverse md:flex-row w-full gap-12">
//         {/* LEFT SIDE - Social Media, Get In Touch, Location */}
//         <div className="w-full md:w-1/2">
//           <p className="text-regular w-3/4">
//             HAVE QUESTIONS? NEED A CUSTOM SOLUTION? WE’D LOVE TO HEAR FROM YOU!
//           </p>

//           <div className="mt-5">
//             <p className="text-gray-500">SOCIAL MEDIA</p>
//             <p className="text-lg mt-2 text-[#1f1f1f]">
//               X - INSTAGRAM - GITHUB
//             </p>
//           </div>

//           <div className="mt-5">
//             <p className="text-gray-500">GET IN TOUCH</p>
//             <p className="text-lg mt-2 text-[#1f1f1f]">
//               AISOLUTIONS.SUNDERLAND@GMAIL.COM
//             </p>
//           </div>

//           <div className="mt-5">
//             <p className="text-gray-500">LOCATION</p>
//             <div style={{ width: "100%" }}>
//               <iframe
//                 width="100%"
//                 height="300"
//                 frameBorder="0"
//                 marginHeight="0"
//                 marginWidth="0"
//                 src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Sunderland+(AI-Solution)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//                 title="Location Map"
//               >
//                 <a href="https://www.gps.ie/collections/drones/">gps drone</a>
//               </iframe>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE - FORM */}
//         <form className="w-full md:w-1/2 flex flex-col gap-6" onSubmit={handleSubmit}>
//           <div className="flex gap-10">
//             <div className="relative w-1/2">
//               <label
//                 className={`absolute top-0 left-0 text-sm transition-all ${
//                   formData.name ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 NAME
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
//                 required
//               />
//             </div>

//             <div className="relative w-1/2">
//               <label
//                 className={`absolute top-0 left-0 text-sm transition-all ${
//                   formData.email ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 EMAIL
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex gap-10">
//             <div className="relative w-1/2">
//               <label
//                 className={`absolute top-0 left-0 text-sm transition-all ${
//                   formData.phone ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 PHONE
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
//                 required
//               />
//             </div>

//             <div className="relative w-1/2">
//               <label
//                 className={`absolute top-0 left-0 text-sm transition-all ${
//                   formData.company ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 COMPANY NAME
//               </label>
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex gap-10">
//             <div className="relative w-1/2">
//               <label
//                 className={`absolute top-0 left-0 text-sm transition-all ${
//                   formData.job ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 JOB
//               </label>
//               <input
//                 type="text"
//                 name="job"
//                 value={formData.job}
//                 onChange={handleChange}
//                 className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
//                 required
//               />
//             </div>

//             <div className="relative w-1/2">
//               <label
//                 className={`absolute top-0 left-0 text-sm transition-all ${
//                   formData.country ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 COUNTRY
//               </label>
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md"
//                 required
//               />
//             </div>
//           </div>

//           <div className="relative mt-6">
//             <label
//               className={`absolute top-0 left-0 text-sm transition-all ${
//                 formData.jobDetails ? "opacity-0" : "opacity-100"
//               }`}
//             >
//               JOB DETAILS
//             </label>
//             <textarea
//               name="jobDetails"
//               value={formData.jobDetails}
//               onChange={handleChange}
//               rows="4"
//               className="w-full border-b border-[#1f1f1f] outline-none bg-transparent text-md resize-none"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="cursor-pointer font-semibold text-large"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "SUBMIT"}
//           </button>

//           {message && <p className="text-green-500 mt-2">{message}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
