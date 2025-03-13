import { useState } from "react";

export default function Navbar({ setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">🔐 AES128 File Security</h1>

        <div className="relative">
          <button
            className="bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-500 cursor-pointer transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu ▼
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-lg shadow-lg">
              <button
                onClick={() => {
                  setActivePage("encrypt");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer w-full text-left"
              >
                🔐 Encrypt File
              </button>
              <button
                onClick={() => {
                  setActivePage("decrypt");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer w-full text-left"
              >
                🔓 Decrypt File
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
