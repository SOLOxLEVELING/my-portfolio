// src/components/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    // Set default value for botcheck to ensure it's initially false
    defaultValues: {
      botcheck: false,
    },
  });

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // The 'e' (event) object is crucial here
  const onSubmit = async (data, e) => {
    // This is the most reliable way to handle form data for services like Web3Forms
    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `New Message from ${data.name} on your Portfolio`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Use the FormData generated from the form element
      });

      const result = await response.json();

      if (result.success) {
        setTimeout(() => {
          reset();
        }, 3000);
      } else {
        console.error("Error from Web3Forms:", result);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase tracking-widest font-display text-white">
        Contact
      </h2>

      {/* Pass the event to handleSubmit so we can access e.target */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* The honeypot field. It's hidden and should not be touched by users. */}
        {/* Its name "botcheck" is specifically what Web3Forms looks for. */}
        <input
          type="checkbox"
          {...register("botcheck")}
          style={{ display: "none" }}
        />

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
            {...register("name", { required: "Name is required" })}
            autoFocus
            className={`w-full p-3 bg-gray-900/50 border ${errors.name ? "border-red-500" : "border-gray-700"} rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-white`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className={`w-full p-3 bg-gray-900/50 border ${errors.email ? "border-red-500" : "border-gray-700"} rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-white`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
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
            {...register("message", {
              required: "Message is required",
              maxLength: {
                value: 1000,
                message: "Message cannot exceed 1000 characters",
              },
            })}
            className={`w-full p-3 bg-gray-900/50 border ${errors.message ? "border-red-500" : "border-gray-700"} rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-white`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {isSubmitSuccessful && (
        <p className="text-center mt-4 text-green-400">
          Message sent successfully!
        </p>
      )}
    </div>
  );
}

export default ContactForm;
