const Urlasync = async ({params}) => {
  const { dpfsa } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${dpfsa}`)
  const pdusers = await res.json()
  
  
  return (
    <div>
      {
     
          <div>
            <h3>{pdusers.name}</h3>
          <p>{pdusers.email} </p>
          <p>{pdusers.address.city} </p>
        </div>
        
     
}

    </div>
  )
}
export default Urlasync