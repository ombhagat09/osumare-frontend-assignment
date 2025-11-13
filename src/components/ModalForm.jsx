"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ModalForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
  className="bg-white p-6 rounded-2xl w-80 shadow-xl relative"
>

</motion.div>

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("All fields are required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format!");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Phone number must be 10 digits!");
      return;
    }

 
    onSubmit({ ...formData, timestamp: new Date().toLocaleString() });
    onClose();
    alert("Thank you for your interest! We'll get back to you soon.");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-center text-xl font-semibold mb-4 text-gray-700">
          Start Organizing
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full max-w-sm mx-auto"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
           className="bg-indigo-600 text-white py-2 rounded-xl mt-2 hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg"

          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
