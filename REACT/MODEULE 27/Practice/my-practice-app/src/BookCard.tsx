import type { Booktype} from'./type'

export default function BookCard({ props }: {props:Booktype}) {
  return (
    <div className='itsonlyforcss'>
      <h1>Book Name:{props.name}</h1>
      <p>Author:{props.author}</p>
      <p>Pages:{props.price}</p>
      <p>Price:{props.price}</p>
    </div>
  )
}