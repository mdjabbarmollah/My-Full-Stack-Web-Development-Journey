
import { Suspense } from 'react'
import './App.css'
import Suspenseusecase from './Users'


const promisecreate = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const parcetextuseOneline = await res.json()
  return parcetextuseOneline;
}

// import LearnUsestate from './Counter'
function App() {
  
//   function handelClick() {
//   alert('Download Processing')
  // }
  // const handelClick = () => { 
  //   alert('Download Processing')
  // }
//   const advanced_handeling_withid = (id) => {
//   alert('cart item ' + id)
// }

  return (
    <>
      <Suspense fallback = {<p>Loading...</p>}>
        <Suspenseusecase promisecreate = {promisecreate()}></Suspenseusecase>
      </Suspense>
      {/* <LearnUsestate></LearnUsestate>
<Batter></Batter> */}
      {/* <button onclick="handelClick()">Its not work because there i dont use camel case, curlly brace and there i am using parentthis </button> */}
     {/* <button onClick={handelClick}>Download</button>
      eta holo right way  */}

      
      {/* advanced  */}
      {/* <button onClick = {() => alert('wait a few secends')}>Click This link </button>          */}
      
      {/* avanced with id  */}
      {/* <button onClick={()=> advanced_handeling_withid(55)}>Add to cart </button> */}
    </>
  )
}

export default App
