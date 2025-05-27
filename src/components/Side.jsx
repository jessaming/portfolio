import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Side = ({ setActiveSection, activeSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "works", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-between h-full border-l border-gray-300">
        <div>
          <p className="uppercase text-xs text-left font-inter-600 mb-4 ml-4">
            Portfolio
          </p>
          <nav className="flex flex-col space-y-4 w-full items-end">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`w-full text-left px-3 pl-5 text-base transition-all duration-200
                ${
                  activeSection === id
                    ? "font-inter-600 border-l-4 border-blue-950"
                    : "text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-25 pb-2 pl-4 flex flex-col items-start space-y-2">
          <a
            href="https://jessaming.github.io/jjg-portfolio/"
            target="_blank"
            className="group relative inline-flex h-12 items-center justify-start text-[12px] font-inter-400 text-left text-secondary"
          >
            <span className="hover-underline-animation">Portfolio v1</span>
            <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Side;
