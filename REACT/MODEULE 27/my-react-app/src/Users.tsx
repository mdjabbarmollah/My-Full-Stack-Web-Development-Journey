import Usercard from "./Usercard"

interface Userdatatype{
  name: string,
  isLoggedIn: boolean
}
const users: Userdatatype[] = [
  {name:'Omar sunny', isLoggedIn:true},
  {name:'Omar faruk', isLoggedIn:false},
  {name:'rajjak', isLoggedIn:true},
  {name:'fahad', isLoggedIn:true},
  {name:'josim', isLoggedIn:false},
]
export default function User() {
  return (
    <div>
      {   
     users.map(item => <Usercard props={item}></Usercard>)
      }
    </div>
  )
}