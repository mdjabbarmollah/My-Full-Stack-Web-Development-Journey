import Carddata from "../component/datacard/card";

const Dataloading = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const pb = await data.json()
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6">
      {
       pb.map((item) => {
       return <Carddata key={item.id} propss = {item}/>
       }) 
      }
    </div>
  )
}
export default Dataloading