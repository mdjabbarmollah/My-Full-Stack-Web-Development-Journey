import type { Usertype } from "./Usertype";
export default function Uidesign({sendingProps}:{sendingProps:Usertype}) {
  
  return (
    <div className="style">
<h3>{sendingProps.name}</h3>
      <p>{sendingProps.email}</p>
      <p>{sendingProps.address.city}</p>
      <p>{sendingProps.company.name}</p>
    </div>
  )
}