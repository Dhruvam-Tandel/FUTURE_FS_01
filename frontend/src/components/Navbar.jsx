import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import pic from "../../public/2.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      closeMenu();
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-slate-950 text-violet-700 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={pic}
            alt="Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-violet-700">
            Dhruvam.dev
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition cursor-pointer">About</a>
          <a onClick={() => scrollToSection("projects")} className="hover:text-blue-400 transition cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection("skills")} className="hover:text-blue-400 transition cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection("resume")} className="hover:text-blue-400 transition cursor-pointer">Resume</a>
          <a onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition cursor-pointer">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-violet-400">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex-col text-center bg-slate-900 px-6 pb-4 space-y-3 text-lg">
          <a onClick={() => scrollToSection("about")} className="block hover:text-blue-400 cursor-pointer">About</a>
          <a onClick={() => scrollToSection("projects")} className="block hover:text-blue-400 cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection("skills")} className="hover:text-blue-400 transition cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection("resume")} className="block hover:text-blue-400 cursor-pointer">Resume</a>
          <a onClick={() => scrollToSection("contact")} className="block hover:text-blue-400 cursor-pointer">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;