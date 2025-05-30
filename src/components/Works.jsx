import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import ImageModal from "./Modal";
import { projects } from "../constants/work_list";
import Title from "./Title";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ImageCarousel } from "./ImageCarousel";
import useIsLargeScreen from "../hooks/screen";

const Works = ({ setActiveSection }) => {
  const isLargeScreen = useIsLargeScreen();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleImageClick = (projectImages, index, title) => {
    setModalImages(projectImages);
    setModalIndex(index);
    setModalTitle(title);
    setModalOpen(true);
  };

  const displayedProjects = isLargeScreen
    ? projects
    : showAll
    ? projects
    : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <div>
      <Title title="Explore the creations" />
      <div className="max-w-7xl mx-auto px-4 py-6 animate-fadeInUp pb-20">
        <div className="relative">
          <div className="space-y-12">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-6 lg:gap-10 xl:gap-12`}
              >
                <div className="w-full lg:w-2/5 flex justify-center">
                  <ImageCarousel
                    images={project.images}
                    title={project.title}
                    onImageClick={(imageIndex) =>
                      handleImageClick(
                        project.images,
                        imageIndex,
                        project.title
                      )
                    }
                  />
                </div>

                {/* details */}
                <div className="w-full lg:w-3/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto lg:mx-0 space-y-3 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-secondary font-semibold text-xs uppercase tracking-normal">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-xl xl:text-2xl font-bold text-primary leading-tight">
                      {project.title}
                    </h2>

                    <p className="text-secondary text-xs lg:text-sm xl:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-white text-xs font-inter-200 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && hasMoreProjects && !isLargeScreen && (
            <div
              className="lg:hidden absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-300"
              style={{
                background: `linear-gradient(to top,
                              #f5f4f9 0%,
                              rgba(245, 244, 249, 0.9) 20%,
                              rgba(245, 244, 249, 0.7) 40%,
                              rgba(245, 244, 249, 0.3) 80%,
                              transparent 100%)`,
              }}
            />
          )}
        </div>

        {hasMoreProjects && !isLargeScreen && (
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
                  +{projects.length - 3}
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

      <ScrollToTop />

      {/* <div className="hidden lg:block">
        <Footer setActiveSection={setActiveSection} />
      </div> */}

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={modalImages}
        currentIndex={modalIndex}
        title={modalTitle}
      />
    </div>
  );
};

export default Works;
