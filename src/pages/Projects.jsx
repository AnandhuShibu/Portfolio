import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  const projects = [
  {
    title: "E-Commerce",
    description: "Art Canva – An e-commerce site for selling wall paints.",
    image: "ecommerce.png",
    technologies: "Python, Django, HTML&CSS, Bootstrap, Postgresql, ORM",
    githubLink: "https://github.com/AnandhuShibu/Artcanva-Ecommerce-project.git",
    // liveLink: "",
  },
  {
    title: "Netflix-Clone",
    description: "Created a Netflix clone using React.",
    technologies: "React, Javascript, Firebase, Tailwind",
    image: "netflix.png",
    githubLink: "https://github.com/AnandhuShibu/Netflix-clone.git",
    // liveLink: "",
  },
  {
    title: "Mobile Application",
    description: "Inventory management Mobile application using Flutter and Django.",
    image: "product_managment.png",
    technologies: "Python, Django, Flutter, REST-framework, State management",
    // githubLink: "",
    // liveLink: "",
  },
  {
    title: "Library Management",
    description: "Application for managing books in the Library.",
    image: "library_management.png",
    technologies: "Python, Django, React-Native, REST-framework",
    // githubLink: "",
    // liveLink: "",
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
          className="relative group bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition duration-300"
        />

        {/* Hover buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-md shadow"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded-md shadow"
          >
            Live
          </a>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>
          <p className="text-sm text-gray-300">-Technologies : {project.technologies}</p>
        </div>
      </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default Projects;
