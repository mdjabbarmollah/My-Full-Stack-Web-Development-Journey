interface Usercard {
  name: string,
  isLoggedIn: boolean
}
export default function forsyling({ props }: { props: Usercard}) {
  return (
    <div className="user">
    
        <h1>Name:{props.name}</h1>
        <p>LoggedIn:{props.isLoggedIn ? 'yes' : 'No'}</p>
      
    </div>
  )
}