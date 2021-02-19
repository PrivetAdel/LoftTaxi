import React from 'react';

const Button = ({children}) => {
  return (
    <input type="submit" value={children} />
  )
};

export default Button;