// function useState(Intialvalue) {
//   let value = Intialvalue
  
//   function setValue(newValue) {
//     value = newValue;
//   }
//   return [value,setValue]
// }
// const [counter, setCounter] = useState(0);
// console.log(counter,setCounter)


function usestate<t>(initialvalue2 : t):[t,(newValue :t)=> void] {
  let value = initialvalue2;
  function setValue(newvlaue: t) {
    value = newvlaue;
  }
  // return [value]
  return [value,setValue]
}
usestate<string>(" ")
usestate<number>(0)
usestate<boolean>(false)


interface User{
  email: string
  isLoggedin: boolean
}
usestate<User>({email: '',isLoggedin : false })
usestate<User | null>(null);