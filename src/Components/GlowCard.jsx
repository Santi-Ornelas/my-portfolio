import React from 'react';

const GlowCard = ({ children, identifier }) => {
  return (
    <div
      id={identifier}
      className="bg-[#0e0c29] border border-[#1b2c68a0] rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-[0_0_25px_#16f2b3]"
    >
      {children}
    </div>
  );
};

export default GlowCard;
