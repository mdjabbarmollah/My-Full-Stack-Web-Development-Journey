let contact = {
name: "Alex Johnson",
email: "ALEX@EMAIL.COM",
phone: "555-1234"
};

// console.log(contact.email.toLocaleLowerCase())
// for (let loop of Object.entries(contact)) {
//   let result = loop[0] + ":" + loop[1];
//   console.log(result)
// }

contact.array = [];
  contact.array.push('fahad', 'object', 'push')
  console.log(contact)
let reverse = contact.name.split("")
let implement = reverse.reverse()
const implemention = implement.join("")
console.log(implemention)
const includes = contact.email.includes('@email.com')
console.log(includes);
