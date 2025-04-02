import emailjs from "emailjs-com";

const SERVICE_ID = "service_bqn1af6";
const TEMPLATE_ID = "template_b3motbm";
const PUBLIC_KEY = "KIQw7gu-JI3Qhe7Pi";

export const sendEmail = async (formData) => {
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};




