import BookCard from './BookCard'
import type {Booktype} from './type'
const BooksSelfimprovement: Booktype[] = [
  {name:"How to talk to anyone",
author:'jhon reay',
   pages: 200 ,
    price: 250,
  },

  {
    name: 'Brain',
    author: 'OmorFaruk',
    pages: 188,
  price: 1000 ,
  },

  {
    name: 'Dark psychology',
    author: 'Random Women',
    pages: 3000,
    price:3500,
},

]
export default function Books() {
  return (
    <div>
      {
        BooksSelfimprovement.map(item => <BookCard props = {item}></BookCard>)
      }
    </div>
  )
}


