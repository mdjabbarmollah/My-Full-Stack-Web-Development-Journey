"use client";

import React, { useState } from 'react';



const Counter = () => {
  const [count, setCount] = useState(0);

  const eventHandeler = () => {
 setCount(count+1)
  }
  
  console.log('counter component')
  return (
    <div>
  
      
      <h3 className='text-5xl'> counter</h3>
 <button onClick={eventHandeler} className='text-4xl bg-amber-700'>Increase</button>
    </div>
  );
};

export default Counter;