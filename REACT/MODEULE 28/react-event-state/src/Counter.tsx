import { useState } from "react";

export default function LearnUsestate() {

  const [additemCounter, setCounter] = useState(0);
    
  function handelclick() {
    setCounter(additemCounter + 1);
  } 
  return (
    <div>
      <h1>Shoping Cart</h1> 
      <p>Item's in the Cart:{additemCounter}</p> 
      <button onClick={handelclick}>add</button>
    </div>

  )
}