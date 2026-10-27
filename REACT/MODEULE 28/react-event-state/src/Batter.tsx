import { useState } from "react"
export default function Batter() {
  const [a, b] = useState(0);
  function countrun() {
    b(a + 1);
  }

  return (
    <div>
      <h1>Score </h1> 
      <p>Runs:{a}</p> 
      <button onClick={countrun}>add Singel</button>
      <button onClick={()=>b(a + 4)}>add Boundaries</button>
    </div>
  )
}