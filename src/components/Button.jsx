import React from 'react';

const Button = ({children, onSubmitClick}) => {
  return (
    <button onClick={onSubmitClick} className="btn">
      {children}
    </button>
  )
};

export default Button;