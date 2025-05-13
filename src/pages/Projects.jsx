import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  const projects = [
    {
      title: "Booking App",
      description:
        "A web application that enables remote workers to book seats in shared workspaces easily. Users can browse available locations.",
      image: "/booking-app.jpg", // Replace with your image path
    },
    {
      title: "E-commerce Website",
      description:
        "Developed a comprehensive E-commerce application using Node.js and Express.js, incorporating full functionality for users.",
      image: "/ecommerce.jpg", // Replace with your image path
    },
    {
      title: "Multifaceted Application",
      description:
        "Developed a multifaceted web application with features including blog creation and editing, video downloading, PDF tools.",
      image: "/multifaceted.jpg", // Replace with your image path
    },
    {
      title: "Basic Inventory Management System",
      description:
        "Developed a basic inventory management system with features including item tracking and stock updates.",
      image: "/inventory.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-[100px] pb-20 px-6 sm:px-12" id="projects">


      <Navbar/>


      <h2 className="text-4xl font-bold text-gray-300 text-center mb-8">Projects</h2>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-12 rounded"></div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover grayscale hover:grayscale-0 transition duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Title</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default Projects;
