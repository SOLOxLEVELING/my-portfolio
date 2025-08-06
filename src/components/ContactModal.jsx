// src/components/ContactModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-50px", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2 } },
  exit: { y: "50px", opacity: 0 },
};

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-black/30 border border-white/10 rounded-lg max-w-2xl w-full"
            variants={modal}
            exit="exit" // Use the exit variant on the modal content itself
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white transition-colors"
            >
              &times;
            </button>
            <div className="p-8 md:p-12">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
