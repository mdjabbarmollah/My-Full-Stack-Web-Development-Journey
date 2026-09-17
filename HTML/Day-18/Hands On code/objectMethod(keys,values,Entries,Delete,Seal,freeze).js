const user = {
  name: "Hasem",
  brother: "kasem",
  relation: "DuI VAI Pothe pai mora gaii",
  father: {
    fatherofFather: "badsha",
    motherOfmother: "majhu",
  }

}
const { name, brother: oneSoul, father: { fatherofFather } } = user
const keys = Object.keys(user)
const values = Object.values(user)
const length = keys.length;
const entre = Object.entries(user);
// console.log(entre)
console.log(name,oneSoul,fatherofFather)
for (elem of entre) {
const [key,value] = elem
  console.log(key,value);
}

// const user = {
//   name: "Hasem",
//   brother: "kasem",
//   relation: "DuI VAI Pothe pai mora gaii",
//   father: {
//     fatherofFather: "badsha",
//     motherOfmother: "majhu",
//   }
// }
// delete user.father//eta delete method

// console.log(user);

// seal meathod
// const storeOwner ={
//   renter: {
//     haron: 699,
//     motaleb: 549,
//     adel: 434,
//     sattar: 435
//   }
// }
// Object.seal(storeOwner)
// storeOwner.nomine = "julekha";
// // storeOwner.renter.push.num = 44;
// console.log(storeOwner)

// freeze method 
const birthcer = {
  name: "utsho",
  age: 35,
  certificateNumber: 54354364,
}
Object.freeze(birthcer)
delete birthcer.name
birthcer.father = "badsha mollah"
// console.log(birthcer)