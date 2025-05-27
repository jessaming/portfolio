import { useState, useEffect } from "react";
import Title from "./Title";
import { about } from "../constants/about";

const About = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-7 pb-20 transition-all">
        <Title title="What I am working on" />

        <div className="relative">
          <div className="md:hidden space-y-6 py-8">
            {about.map((about, index) => {
              const IconComponent = about.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={about.id}
                  className={`relative ${
                    isEven ? "ml-4" : "mr-4 ml-auto"
                  } max-w-xs`}
                  style={{
                    transform: `rotate(${isEven ? "1deg" : "-1deg"})`,
                  }}
                >
                  {/* mobile */}
                  <div className="bg-white rounded-2xl shadow-lg p-4 transform transition-all duration-300 fadeInUp hover:shadow-xl hover:scale-102">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                        <IconComponent
                          size={18}
                          style={{ color: about.iconColor }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-inter-600 mb-1">
                          {about.title}
                        </h3>
                        <p className="text-xs text-secondary leading-normal">
                          {about.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* desktop */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto">
              {/* left column */}
              <div className="space-y-8">
                {about.slice(0, 3).map((about, index) => {
                  const IconComponent = about.icon;
                  const actualIndex = index;
                  return (
                    <div
                      key={about.id}
                      className="relative"
                      style={{
                        transform: `rotate(${
                          actualIndex % 2 === 0 ? "0.5deg" : "-0.5deg"
                        })`,
                        marginLeft: actualIndex % 2 === 0 ? "0" : "2rem",
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all animate-fadeInUp duration-300 hover:shadow-xl hover:scale-102">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                            <IconComponent
                              size={20}
                              style={{ color: about.iconColor }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-inter-600 mb-2">
                              {about.title}
                            </h3>
                            <p className="text-sm text-secondary leading-normal">
                              {about.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* right column */}
              <div className="space-y-8 pt-12">
                {about.slice(3, 5).map((about, index) => {
                  const IconComponent = about.icon;
                  const actualIndex = index + 3;

                  return (
                    <div
                      key={about.id}
                      className="relative"
                      style={{
                        transform: `rotate(${
                          actualIndex % 2 === 0 ? "-0.5deg" : "0.5deg"
                        })`,
                        marginRight: actualIndex % 2 === 0 ? "2rem" : "0",
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all animate-fadeInUp duration-300 hover:shadow-xl hover:scale-102">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                            <IconComponent
                              size={20}
                              style={{ color: about.iconColor }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-inter-600 mb-2">
                              {about.title}
                            </h3>
                            <p className="text-sm text-secondary leading-normal">
                              {about.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
