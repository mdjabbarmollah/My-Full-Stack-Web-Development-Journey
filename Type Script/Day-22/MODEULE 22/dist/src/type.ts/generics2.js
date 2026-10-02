"use strict";
// function useState(Intialvalue) {
//   let value = Intialvalue
Object.defineProperty(exports, "__esModule", { value: true });
//   function setValue(newValue) {
//     value = newValue;
//   }
//   return [value,setValue]
// }
// const [counter, setCounter] = useState(0);
// console.log(counter,setCounter)
function usestate(initialvalue2) {
    let value = initialvalue2;
    function setValue(newvlaue) {
        value = newvlaue;
    }
    // return [value]
    return [value, setValue];
}
usestate(" ");
usestate(0);
usestate(false);
usestate({ email: '', isLoggedin: false });
usestate(null);
//# sourceMappingURL=generics2.js.map