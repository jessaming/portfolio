import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="max-w-7xl mx-auto pt-4 pb-8 px-4">
      <div className="text-center -mb-4 lg:mb-8">
        <h1 className="text-2xl md:text-3xl uppercase tracking-tighter font-bold mb-2">
          {title}
        </h1>
        <div className="m-3 w-15 h-1.5 mx-auto bg-gradient-to-r from-[#0b2866] to-[#2d53bd] rounded-full" />
      </div>
    </div>
  );
};

export default Title;
