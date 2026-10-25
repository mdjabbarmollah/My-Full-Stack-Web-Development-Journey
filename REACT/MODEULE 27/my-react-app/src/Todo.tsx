// function Todo(props) {
//  {
//     border: '10px',
//     borderRadius: '20px',
//     backgroundColor: 'black',
// color:'white',
//     margin: '20px',
//     padding:'15px'
//   }
//   const { task, time} = props;
//   return (
//     <>
//       <div style={forstyling}>
//         <li>do this work:{task} at {time}</li>
//       </div>
       
//    </>
    
//   )
// }

// typescript using method  
interface Type{
  task: string,
  time?:string,
}
function Todo({task,time}:Type) {
    const forstyling = {
    border: '10px',
    borderRadius: '20px',
    backgroundColor: 'black',
    color:'white',
    margin: '20px',
    padding:'15px'
    }
  return (
    <>
      <div style={forstyling}>
      <li>task:{task}</li>
      <li>time:{time}</li>
      </div>
      </>
    )
}

export default Todo