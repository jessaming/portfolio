import React from "react";

const Footer = ({
  setActiveSection = () => console.warn("setActiveSection not provided"),
}) => {
  React.useEffect(() => {
    console.log("Footer mounted. setActiveSection is:", setActiveSection);
  }, [setActiveSection]);

  return (
    <div className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-4 ">
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
      </div>
    </div>
  );
};

export default Footer;
