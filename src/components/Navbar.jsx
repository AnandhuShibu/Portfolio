import React from 'react'

function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="w-[600px] bg-[#0f172a]/90 backdrop-blur border border-gray-600 rounded-md shadow-md px-8 py-3">
        <ul className="flex justify-between gap-14">
          {["Home", "Skills", "Projects", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className={`cursor-pointer transition duration-200 text-lg ${
                item === "Home" ? "text-blue-500 font-bold" : "text-white hover:text-blue-400"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
