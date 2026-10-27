
import './App.css'

function App() {
  const handelclick = () => {
    alert('Download Started')
  }

  return (
    <>
     <button onClick= {handelclick}>Download</button>
      <button onClick = {() =>(alert('Successfully add to cart'))}>add to cart</button>
    </>
  )
}

export default App
