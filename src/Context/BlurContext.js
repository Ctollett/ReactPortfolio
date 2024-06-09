// Contexts/BlurContext.js
import React, { createContext, useRef } from 'react';

export const BlurContext = createContext(null);

export const BlurProvider = ({ children }) => {
  const blurRef = useRef(null);

  return (
    <BlurContext.Provider value={blurRef}>
      {children}
    </BlurContext.Provider>
  );
};
