import { useState, useEffect } from "react";
import Title from "./Title";
import { ChevronDown, ChevronUp } from "lucide-react";
import useIsLargeScreen from "../hooks/screen";
import { allSkills } from "../constants/skillset";

const Skills = () => {
  const isLargeScreen = useIsLargeScreen();
  const [showAll, setShowAll] = useState(false);
  const [initialSkillsCount, setInitialSkillsCount] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) setInitialSkillsCount(15);
      else if (width >= 640) setInitialSkillsCount(12);
      else setInitialSkillsCount(9);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDotColor = (level) => {
    const colors = {
      Advanced: "bg-red-700",
      Intermediate: "bg-blue-700",
      Beginner: "bg-yellow-500",
    };
    return colors[level] || "bg-yellow-500";
  };

  const displayedSkills = isLargeScreen
    ? allSkills
    : showAll
    ? allSkills
    : allSkills.slice(0, initialSkillsCount);
  const hasMoreSkills = allSkills.length > initialSkillsCount;

  return (
    <div className="px-6 max-w-7xl mx-auto pb-20">
      <Title title="Skills on display." />

      <div className="relative">
        <div className="relative">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-6 transition-all duration-500 ease-in-out">
            {displayedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const dotColor = getDotColor(skill.level);
              const isNewlyVisible = !showAll && index >= initialSkillsCount;

              return (
                <div
                  key={index}
                  className={`group relative rounded-xl p-3 sm:p-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fadeInUp ${
                    isNewlyVisible ? "animate-fadeInUp" : ""
                  }`}
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
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 4px 6px -1px rgba(11, 40, 102, 0.08), 
                      0 2px 4px -1px rgba(11, 40, 102, 0.05),
                      0 1px 3px 0 rgba(125, 137, 160, 0.1)
                    `;
                  }}
                >
                  <div
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full ${dotColor}`}
                  ></div>

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
                    <h3 className="text-xs text-secondary truncate">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {!showAll && hasMoreSkills && !isLargeScreen && (
            <div
              className="lg:hidden absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-300"
              style={{
                background: `linear-gradient(to top, #f5f4f9 0%, rgba(245, 244, 249, 0.9) 20%, rgba(245, 244, 249, 0.7) 40%, rgba(245, 244, 249, 0.3) 80%, transparent 100%)`,
              }}
            />
          )}
        </div>

        {hasMoreSkills && !isLargeScreen && (
          <div className="lg:hidden flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full shadow-xs hover:shadow-xl transition-all duration-300 text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 hover:border-gray-300 hover:scale-105 active:scale-95 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
            >
              <span className="transition-all duration-200 font-inter-400 text-primary">
                {showAll ? "Show Less" : "Show More"}
              </span>

              {!showAll && (
                <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full transition-all duration-200 group-hover:bg-gray-200">
                  +{allSkills.length - initialSkillsCount}
                </span>
              )}

              <div className="transition-transform duration-200 group-hover:scale-110">
                {showAll ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-left">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${getDotColor("Advanced")}`}
            ></div>
            <span className="text-[9px] md:text-xs font-inter-300 text-secondary">
              Highly familiar; regularly used in projects; can build
              independently
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${getDotColor("Intermediate")}`}
            ></div>
            <span className="text-[9px] md:text-xs font-inter-300 text-secondary">
              Used in projects; can work with minimal guidance
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${getDotColor("Beginner")}`}
            ></div>
            <span className="text-[9px] md:text-xs font-inter-300 text-secondary">
              Basic understanding and initial exposure; familiar with
              fundamentals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
