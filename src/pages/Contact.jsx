import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div
      className="min-h-screen bg-[#0f172a] text-white pt-[100px] flex flex-col justify-between px-4 sm:px-6 py-20"
      id="contact"
    >
      <Navbar />
      <div className="flex flex-col items-center flex-grow">
        <h2 className="text-4xl font-bold text-gray-300 text-center mb-4">Contact Me</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mb-10 rounded"></div>

        <form
          className="w-full max-w-md bg-transparent space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition text-white font-semibold shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
