import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (

    

  
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-sans">

      <Navbar/>

      {/* Hero Section */}
      <div className="flex flex-col items-center pt-[150px] justify-center text-center py-12 px-4">

        
        <img
          src="Img.JPG"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6">
          Hi, I'm <span className="text-blue-500">Anandhu Shibu</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-300">
          Full Stack Web Developer specializing in Python Django with expertise
          in JavaScript, React, Postgresql.
        </p>

        <button className="mt-6 px-6 py-3 border border-dashed border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all">
          View My Resume
        </button>

        <p className="mt-10 text-sm text-gray-400">Connect with me</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-2xl text-gray-300">
          
          <a
            href="https://wa.me/yourwhatsappphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>


          <a
          href="tel:+911234567890"
          className="text-lg hover:text-yellow-400 transition duration-300"
          >
          <FaPhoneAlt />
          </a>


          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-400 transition duration-300"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>


          <a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>

        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
