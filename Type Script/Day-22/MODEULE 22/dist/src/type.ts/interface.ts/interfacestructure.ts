type userRole = 'admin' | 'moderator' | 'guest';
interface user {
  name: string;
  role: userRole;
  email: string;
}

interface admin extends user{
  permission: string[];

}
interface moderator extends user {
  moderations: string[];
}
const bigboss: admin = {
  permission: ['manage user', 'store', 'edit content'],
  role:'admin', 
  name: 'jhon',
  email: 'fahadmollah68@gmail.com',
}

// type ekoi nam a duita declare kora jabe na 
type book {
  title: string,
  author: string,
  price: number
}

// type book {
//   // ekhon r ei nam  a declare kora jabe na
// }
// tobe interface declare kora jabe 
interface gift {
  name: string,
}
interface gift {
  role: number,
}
const bdaygift: gift = {
  name: 'Teddy Bear',
  role: 34,
}
