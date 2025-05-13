
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Skills() {
  return (
    <div>

      <Navbar/>
      

      {/* Skills Section */}
   <div className="text-center mb-0 pt-[100px] pb-20 bg-[#0f172a]">
     <h1 className="text-4xl text-gray-300 font-bold">Skills</h1>
     <div className="w-32 h-1 bg-green-500 mx-auto mt-2 mb-8 rounded"></div>

     {/* Programming Languages */}
     <h2 className="text-2xl text-gray-300 font-semibold mb-6">Programming Languages</h2>
     <div className="flex justify-center gap-10 mb-10 flex-wrap">

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src= "python.png" alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">PYTHON</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src="javascript.png" alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">JAVASCRIPT</p>
    </div>
    
    </div>



     {/*Frontend */}
     <h2 className="text-2xl text-gray-300 font-semibold mb-6">Frontend Technologies</h2>
     <div className="flex justify-center gap-10 mb-10 flex-wrap">

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='react.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">REACT</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='tailwind.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">TAILWIND</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='html.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">HTML</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='bootstrap.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">BOOTSTRAP</p>
    </div>
    
    </div>


    {/*Backend */}
     <h2 className="text-2xl text-gray-300 font-semibold mb-6">Backend Technologies</h2>
     <div className="flex justify-center gap-10 mb-0 flex-wrap">

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='django.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">DJANGO</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='flask.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">FLASK</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='postgresql.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">POSTGRESQL</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src='mongodb.png' alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm text-gray-300 font-semibold">MONGODB</p>
    </div>
    
    </div>

    



  </div>


  <Footer/>

    
    </div>
  )
}

export default Skills
