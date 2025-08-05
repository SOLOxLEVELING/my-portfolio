import React, { useState } from "react";

function ContactForm() {
  // Use the useState hook to manage the form's input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To show submission status (e.g., 'Message Sent!')

  // This is the function you provided.
  // It's placed inside the component so it can access the state variables (name, email, message).
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission (which reloads the page)
    setStatus("Sending..."); // Give user feedback

    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        // Clear the form after successful submission
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  // This is the JSX that renders the form UI
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase tracking-widest">
        Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on change
            required
            className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            required
            className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update state on change
            required
            className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 font-semibold text-white bg-pink-600 rounded-md hover:bg-pink-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
    </div>
  );
}

export default ContactForm;
