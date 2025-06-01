import React from "react";

const Footer = ({
  setActiveSection = () => console.warn("setActiveSection not provided"),
}) => {
  // React.useEffect(() => {
  //   console.log("Footer mounted. setActiveSection is:", setActiveSection);
  // }, [setActiveSection]);

  return (
    <div className="py-24 text-center">
      {/* first version */}
      {/* <div className="max-w-4xl mx-auto px-4 ">
        <h2 className="text-lg lg:text-xl font-bold text-primary mb-2">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-secondary text-sm lg:text-base mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create something amazing together.
        </p>
        <button
          onClick={() => {
            setActiveSection("contact");
          }}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-6 font-medium text-neutral-200 transition hover:scale-110"
        >
          <span>Let's Collaborate</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20"></div>
          </div>
        </button>
      </div> */}

      {/* second version */}
      <div className="relative rounded-full -mb-24 mx-auto w-full bg-primary text-left">
        <a
          href="https://jessaming.github.io/jjg-portfolio/"
          target="_blank"
          className="group relative inline-flex h-12 items-center justify-start text-xs font-inter-200 ml-5 text-white"
        >
          <span className="hover-underline-animation">See Portfolio v1</span>
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
  );
};

export default Footer;
