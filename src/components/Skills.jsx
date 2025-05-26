"use client"

import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaMicrosoft,
  FaCode,
  FaGoogle,
} from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { FaWind } from "react-icons/fa6";

import { SiTailwindcss, SiBootstrap, SiAdobeillustrator, SiCanva, SiGreensock, SiJquery } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"

const Skills = () => {
  const allSkills = [
    { name: "HTML5", icon: FaHtml5, level: "Advanced", category: "Web Development", color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, level: "Advanced", category: "Web Development", color: "#1572B6" },
    { name: "JavaScript", icon: DiJavascript, level: "Intermediate", category: "Web Development", color: "#F7DF1E" },
    { name: "PHP", icon: FaPhp, level: "Intermediate", category: "Web Development", color: "#777BB4" },
    { name: "React.js", icon: FaReact, level: "Intermediate", category: "Web Development", color: "#61DAFB" },
    { name: "GSAP", icon: SiGreensock, level: "Beginner", category: "Web Development", color: "#88CE02" },
    { name: "Node.js", icon: FaNodeJs, level: "Intermediate", category: "Web Development", color: "#339933" },
    { name: "jQuery", icon: SiJquery, level: "Intermediate", category: "Web Development", color: "#0769AD" },
    { name: "AJAX", icon: FaCode, level: "Intermediate", category: "Web Development", color: "#0b2866" },
    { name: "React Native", icon: FaReact, level: "Intermediate", category: "Mobile App Development", color: "#61DAFB"},
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", category: "UI Frameworks", color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, level: "Advanced", category: "UI Frameworks", color: "#7952B3" },
    { name: "NativeWind", icon: FaWind, level: "Intermediate", category: "UI Frameworks", color: "#06B6D4" },
    { name: "Java", icon: FaJava, level: "Beginner", category: "Programming Languages", color: "#ED8B00" },
    { name: "C#", icon: TbBrandCSharp, level: "Beginner", category: "Programming Languages", color: "#239120" },
    { name: "Figma", icon: FaFigma, level: "Intermediate", category: "Prototyping & Design", color: "#F24E1E" },
    { name: "Canva", icon: SiCanva, level: "Advanced", category: "Prototyping & Design", color: "#00C4CC" },
    { name: "Adobe Illustrator", icon: SiAdobeillustrator, level: "Intermediate", category: "Prototyping & Design", color: "#FF9A00" },
    { name: "Microsoft Office", icon: FaMicrosoft, level: "Advanced", category: "Productivity Tools", color: "#D83B01" },
    { name: "Google Workspace", icon: FaGoogle, level: "Advanced", category: "Productivity Tools", color: "#4285F4" },
  ]

  const getDotColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-red-700"
      case "Intermediate":
        return "bg-blue-700"
      case "Beginner":
        return "bg-yellow-500"
      default:
        return "bg-yellow-500"
    }
  }

  const getLegendDotColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-red-700"
      case "Intermediate":
        return "bg-blue-700"
      case "Beginner":
        return "bg-yellow-500"
      default:
        return "bg-yellow-500"
    }
  }

  return (
    <div className="pb-12 px-6 max-w-7xl mx-auto">
      <div className="text-left mb-12">
        <h1 className="text-3xl md:text-4xl uppercase tracking-tight font-bold mb-3">
          Skills on Display.
        </h1>
        <div className="w-16 h-1 mx-auto rounded-full mb-4"></div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-6">
        {allSkills.map((skill, index) => {
          const IconComponent = skill.icon
          const dotColor = getDotColor(skill.level)

          return (
            <div
              key={index}
              className="group relative rounded-xl p-3 sm:p-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                boxShadow: `
                  0 4px 6px -1px rgba(11, 40, 102, 0.08), 
                  0 2px 4px -1px rgba(11, 40, 102, 0.05),
                  0 1px 3px 0 rgba(125, 137, 160, 0.1)
                `,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 25px 50px -12px rgba(11, 40, 102, 0.15),
                  0 20px 25px -5px rgba(11, 40, 102, 0.1),
                  0 10px 10px -5px rgba(125, 137, 160, 0.08)
                `
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 4px 6px -1px rgba(11, 40, 102, 0.08), 
                  0 2px 4px -1px rgba(11, 40, 102, 0.05),
                  0 1px 3px 0 rgba(125, 137, 160, 0.1)
                `
              }}
            >
              <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${dotColor}`}></div>

              <div className="flex justify-center mb-3">
                <IconComponent
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl group-hover:scale-110 transition-all duration-300"
                  style={{
                    color: skill.color,
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
                  }}
                />
              </div>

              <div className="text-center">
                <h3 className="text-xs text-secondary truncate">{skill.name}</h3>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-left">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getLegendDotColor("Advanced")}`}></div>
              <span className="text-[8px] md:text-xs font-inter-300 text-secondary">Advanced – Highly familiar; regularly used in projects; can build independently</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getLegendDotColor("Intermediate")}`}></div>
              <span className="text-[8px] md:text-xs font-inter-300 text-secondary">Intermediate – Used in projects; can work with minimal guidance</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getLegendDotColor("Beginner")}`}></div>
              <span className="text-[8px] md:text-xs font-inter-300 text-secondary">Beginner – Basic understanding and initial exposure; familiar with fundamentals </span>
            </div>
          </div>
      </div>
      </div>
  )
}

export default Skills
