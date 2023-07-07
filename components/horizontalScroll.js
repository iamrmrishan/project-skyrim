import React from 'react';

const HorizontalScroll = ({ children }) => {
  return (
    <div className="flex overflow-x-scroll hide-scrollbar whitespace-nowrap">
    {children}
  </div>
  );
};

export default HorizontalScroll;
