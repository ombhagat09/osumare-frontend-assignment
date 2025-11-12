"use client";
import { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import DataTable from "@/components/DataTable";
import Navbar from "@/components/Navbar";

// 🧠 Osumare Frontend Assignment
// ✅ Built manually by Om Bhagat

export default function Page() {
  const [open, setOpen] = useState(false);
  const [userEntries, setUserEntries] = useState([]);

  // Load saved data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      const parsed = JSON.parse(saved);
      Promise.resolve().then(() => setUserEntries(parsed));
    }
  }, []);

  // Save data manually when entries change
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(userEntries));
  }, [userEntries]);

  const saveEntry = (entry) => {
    setUserEntries([...userEntries, entry]);
  };

  return (
    <>
      <Navbar />

      {/* 🌈 Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-200 via-indigo-100 to-transparent opacity-40 blur-3xl"></div>

        <div className="z-10 text-center p-4 sm:p-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
            Organize Your Leads Efficiently 💼
          </h1>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-lg">
            Simplify lead management with one click — get started instantly.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-indigo-700 transition"
          >
            Start Organizing
          </button>
        </div>
      </div>

      {/* 🧾 Modal + Data */}
      {open && <ModalForm onClose={() => setOpen(false)} onSubmit={saveEntry} />}
      <section className="flex flex-col items-center justify-center p-4 sm:p-8">
        {userEntries.length > 0 ? (
          <DataTable tableData={userEntries} />
        ) : (
          <p className="text-gray-500 mt-10">No submissions yet.</p>
        )}
      </section>
    </>
  );
}
