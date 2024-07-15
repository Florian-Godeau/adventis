import React from 'react';

const CustomArrow = ({ className, style, onClick, icon }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    >
      <img src={icon} alt="arrow" style={{ width: '20px', height: '20px' }} />
    </div>
  );
};

export default CustomArrow;