// src/components/ContactForm.jsx
import React, { useState } from "react";

function ContactForm() {
  // FIX: Paste your Web3Forms Access Key directly here.
  // This is the most reliable way to ensure it's correct.
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY; // <-- PASTE YOUR KEY HERE

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", `New Message from ${name} on your Portfolio`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        // IMPROVED ERROR HANDLING: Log the specific error message from the server
        console.error("Error from Web3Forms:", result);
        setStatus(result.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase tracking-widest font-display text-white">
        Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-2 text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-white"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-2 text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-white"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-2 text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-white"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
      {status && <p className="text-center mt-4 text-white">{status}</p>}
    </div>
  );
}

export default ContactForm;
