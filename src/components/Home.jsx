import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gradientBg from "../assets/blue-gradient.mp4";

const Home = ({ setActiveSection }) => {
  const [title] = useTypewriter({
    words: [
      "Front-end Developer",
      "UI/UX Designer",
      "React Developer",
      "Interface Programmer",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  return (
    <div className="w-full h-1/2 flex flex-col justify-center items-center">
      <div className="mt-10 md:mt-15 flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-inter-600">
          Jessamin Jhoy Godio
        </h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-inter-300 font-italic text-left text-secondary">
          {title} <Cursor cursorBlinking></Cursor>
        </h1>
      </div>

      <div className="w-full h-[10vh] lg:h-[12vh] mt-5 mb-5 lg:mt-10 lg:mb-10">
        <video
          src={gradientBg}
          autoPlay
          loop
          muted
          className="w-full h-full m-0 opacity-90 rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="invisible md:visible md:w-1/4">
          <button
            onClick={() => {
              setActiveSection("contact");
            }}
            class="group relative inline-flex h-12 items-center justify-center px-6 md:text-sm lg:text-lg font-inter-400 text-primary/80"
          >
            <span className="uppercase hover-underline-animation hover:font-semibold">
              Connect
            </span>
            <div class="ml-3 -rotate-45 transition-all duration-200 group-hover:rotate-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <span className="-mt-8 md:mt-0 text-center md:text-left md:w-3/4 text-sm md:text-base lg:text-lg md:mr-5">
          Driven BS Computer Science graduate with a firm grasp of{" "}
          <b>front-end development</b> and <b>design</b>, complemented by
          full-stack development exposure gained through internship and
          projects. Quick to learn, adaptable, attentive to detail and quality,
          and committed to continuous growth in both design and development
          domains, with a{" "}
          <span className="hover:underline">
            vision of developing innovative solutions that optimize user
            experiences and accelerate business growth
          </span>
          .
        </span>
      </div>

      <hr class="h-px my-8 bg-blue-950 border-0 opacity-25 w-full" />
    </div>
  );
};

export default Home;
