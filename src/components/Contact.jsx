import Title from "./Title";
import { contactMethods } from "../constants/contact_list";

const Contact = () => {
  return (
    <div className="pb-12 px-6 max-w-7xl mx-auto">
      <Title title="Let's Connect!" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {contactMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 transition-all duration-300 ease-in-out transform hover:scale-110 animate-fadeInUp"
              aria-label={method.label}
            >
              <IconComponent
                size={48}
                className="mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ color: method.color }}
              />
              <span className="text-primary/70 font-inter-300 text-sm group-hover:text-primary/90 transition-colors duration-300">
                {method.name}
              </span>
            </a>
          );
        })}
      </div>
      <div className="pb-20 h-2"></div>
    </div>
  );
};

export default Contact;
