import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationMenu() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${
        isVisible ? "z-50" : "z-40 pointer-events-none"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 pointer-events-auto"
      >
        {isVisible ? (
          <X className="text-black" />
        ) : (
          <Menu className="text-black" />
        )}
      </button>
      {/* === Toggle Button === */}

      {/* Navigation Menu */}
      <div
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed inset-0 bg-navigationMenu transition-[clip-path] duration-500 ease-in-out ${
          isVisible
            ? "clip-path-circle-100 pointer-events-auto"
            : "clip-path-circle-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-textMain font-mainFont">
          <nav className="text-4xl space-y-8">
            <a href="/" className="block hover:opacity-75 transition-colors">
              Home
            </a>
            <a
              href="/projects"
              className="block hover:opacity-75 transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="block hover:opacity-75 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      {/* === Navigation Menu === */}
    </div>
  );
}
