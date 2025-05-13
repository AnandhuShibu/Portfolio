
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Skills() {
  return (
    <div>

      <Navbar/>
      

      {/* Skills Section */}
   <div className="text-center mb-0 pt-[100px] pb-20 bg-[#6B7A8F]">
     <h1 className="text-4xl font-bold">Skills</h1>
     <div className="w-32 h-1 bg-green-500 mx-auto mt-2 mb-8 rounded"></div>

     {/* Programming Languages */}
     <h2 className="text-2xl font-semibold mb-6">Programming Languages</h2>
     <div className="flex justify-center gap-10 mb-10 flex-wrap">

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img src="Img.JPG" alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>
    
    </div>



     {/*Frontend */}
     <h2 className="text-2xl font-semibold mb-6">Frontend Technologies</h2>
     <div className="flex justify-center gap-10 mb-10 flex-wrap">



    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>
    
    </div>


    {/*Backend */}
     <h2 className="text-2xl font-semibold mb-6">Backend Technologies</h2>
     <div className="flex justify-center gap-10 mb-0 flex-wrap">

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>

    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md w-36 flex flex-col items-center hover:scale-105 transition">
      <img alt="title" className="w-12 h-12 mb-4" />
      <p className="text-sm font-semibold">title</p>
    </div>
    
    </div>

    



  </div>


  <Footer/>

    
    </div>
  )
}

export default Skills
