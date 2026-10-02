"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useState(Intialvalue) {
    let value = Intialvalue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
const [counter, setCounter] = useState(0);
console.log(counter, setCounter);
//# sourceMappingURL=generics2.js.map