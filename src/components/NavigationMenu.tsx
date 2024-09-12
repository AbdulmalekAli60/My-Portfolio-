import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

export default function NavigationMenu() {
  const [isVisible, setIsVisible] = useState(false);

  // Remove name of section
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.substring(1); // Remove the "#"
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;

          
          if (scrollPosition < offsetTop - windowHeight / 2 || 
              scrollPosition > offsetTop + offsetHeight - windowHeight / 2) {
            // Remove the hash from the URL
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
      }
    };

    //clean up
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // === Remove name of section ===


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

      {/* Navigation Menu */}
      <div
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed inset-0 bg-navigationMenu transition-[clip-path] duration-500 ease-in-out ${
          isVisible
            ? "clip-path-circle-100 pointer-events-auto"
            : "clip-path-circle-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-textMain font-secundryFont">
          <nav className="text-4xl flex flex-col space-y-10">
            <Link smooth to="#home" className="block hover:opacity-75 transition-colors">
              Home
            </Link>
            
            <Link smooth to="#projects" className="block hover:opacity-75 transition-colors">
              Projects
            </Link>
            
            <Link smooth to="#contact" className="block hover:opacity-75 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}