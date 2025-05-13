import React from 'react'

function Footer() {
  return (
    <div>
      {/* Fixed Footer */}
      <footer className="fixed bottom-0 w-full bg-[#0f172a]/90 backdrop-blur text-white text-center text-sm py-4 z-40 border-t border-gray-600">
        <p>
          Made with <span className="text-red-500">♥</span> by{" "}
          <span className="text-blue-400 font-semibold">Anandhu</span> © 2025
        </p>
      </footer>
    </div>
  )
}

export default Footer

