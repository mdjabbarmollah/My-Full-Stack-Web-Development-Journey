import { use } from "react"
import Uidesign from "./Usercard";
import type { Usertype } from './Usertype';

function Suspenseusecase({ promisecreate }: {promisecreate: Promise<Usertype[]>}) {
  const users = use(promisecreate);
  console.log(users)
  return (
    <div>
      <h4>How to use Suspence & connect with compnnent</h4>
      <h4>Users:{users.length}</h4>
      {
        users.map(item => <Uidesign sendingProps = {item}></Uidesign>)
      }
    </div>
  )
}
export default Suspenseusecase