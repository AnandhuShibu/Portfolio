import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="w-[600px] bg-[#0f172a]/90 backdrop-blur border border-gray-600 rounded-md shadow-md px-8 py-3">
        <ul className="flex justify-between gap-14">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className={`transition duration-200 text-lg ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
