import { useState } from "react";

function useState(initialvalue) {
  let state = initialvalue
  function setState(newupdate) {
    state = newupdate
  }
  return [state, setState];
}
const [counter, setcounter] = useState(0);
