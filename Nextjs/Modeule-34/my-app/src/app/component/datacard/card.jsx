
const Carddata = ({propss}) => {
  const {title,id} = propss
  return (
  <div className="card card-dash bg-gray-500 text-amber-100 w-auto h-auto border  rounded-4xl p-3 ">
  <div className="card-body">
    <h2 className="card-title"> {title}</h2>
        <p>{id}</p>
        
    <div className="card-actions justify-end">
      <button className="btn bg-mauve-500">see more</button>
    </div>
  </div>
</div> 
)

}
export default Carddata