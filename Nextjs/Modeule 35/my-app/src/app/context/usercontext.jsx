'use client'

import React, { createContext } from 'react';

export const Usercontext = createContext(null)

const Userprovider = ({ children }) => {
   
  return (
    <div>
      <Usercontext.Provider value = {{user:'jamai babu',isLooggedIn: true}}>
        {children}
    </Usercontext.Provider >
    </div>
  );
};

export default Userprovider;