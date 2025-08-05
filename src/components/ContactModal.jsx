// src/components/ContactModal.jsx
import React from "react";
import ContactForm from "./ContactForm"; // We will place the form inside this modal

const ContactModal = ({ isOpen, onClose }) => {
  // If the modal is not open, render nothing.
  if (!isOpen) {
    return null;
  }

  return (
    // The main overlay with the frosted glass effect. Clicking it closes the modal.
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
    >
      {/* The content container. 
        We use e.stopPropagation() to prevent the modal from closing when you click inside it.
      */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-black/30 border border-white/10 rounded-lg max-w-2xl w-full"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white transition-colors"
        >
          &times;
        </button>

        {/* Render the Contact Form Component inside the modal */}
        <div className="p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
