import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: "#about", text: "About" },
    // { id: 'skills', text: 'Skills' },
    { id: "#projects", text: "Projects" },
    { id: "#experience", text: "Experience", target: false },
    // { id: "https://blog.jyylab.com", text: "Blog", target: true },
  ];

  return (
    <nav className="sticky top-0 flex items-center justify-between p-5 text-white z-50 shadow-xl bg-[#0e0d11]">
      <div className="flex items-center">
        <a href="#">
          <h3 className="text-lg font-bold mr-1 hover:text-[#8fdbcf]">
            James Young
          </h3>
        </a>
        <div className="w-2 h-2 bg-violet-400 rounded-full mt-1"></div>
      </div>
      <div className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <a
            key={`${link.id}`}
            href={`${link.id}`}
            className="hover:text-[#7359f8]"
            target={link.target ? "_blank" : ""}
          >
            <h3 className="text-lg">{link.text}</h3>
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-[#0e0d11] md:hidden">
          <div className="flex flex-col space-y-4 p-5">
            {navLinks.map((link) => (
              <a
                key={`${link.id}`}
                href={`${link.id}`}
                className="hover:text-[#7359f8]"
                target={link.target ? "_blank" : ""}
              >
                <h3>{link.text}</h3>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
