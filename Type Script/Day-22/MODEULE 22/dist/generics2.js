"use strict";
function useState(Intialvalue) {
    let value = Intialvalue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
const [counter, setCounter] = useState(0);
console.log(counter, setCounter);
