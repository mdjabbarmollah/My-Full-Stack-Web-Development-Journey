// let user = {
//   username: 'codeer123',
//   address: {
//     city: 'Austin',
//     zip:'78701'
//   }

// }
// delete user.address.zip
// user.address.country = 'bangladesh'
// console.log(user)

let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
const keys = Object.keys(book);
const all = Object.values(book)
delete book.pages
console.log(keys, all)
