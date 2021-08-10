import React from 'react';

export const Input = ({ value, setValue, type, placeholder }) => {
  return (
    <input
      className={'input'}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
