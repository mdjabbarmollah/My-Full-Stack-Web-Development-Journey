// const personDetails = {
//   person1: {
//     name: "fahad",
//     age: 25,
//     homeAdd: "faridpur",

//     wifeDetails: {
//       name: "jasiya",
//       age: 25,
//       "hypen or space use case" : "must use third bracket when you want to access",
//       homeAdd: "sadipur"
//     }
//   }
// }
// personDetails.person1.fahter = "Daliluddin"
// personDetails.person1.wifeDetails.fahter = "zahid Sheikh"

// // console.log(personDetails)
// // console.log(personDetails.person1.wifeDetails)
// const details = "wifeDetails"//bracket notation
// const p1detail = "person1";
// // console.log(personDetails.person1[details])
// console.log(personDetails[p1detail])
// // hypen / space 
// console.log(personDetails.person1.wifeDetails["hypen or space use case"])


// optional chaining
const personDetails2 = {
  person1: {
    name: "ahad",
    age: 27,
    homeAdd: "faridpur",
  },
  wifeDetails: {
      name: "jasiya",
      age: 25,
      "hypen or space use case" : "must use third bracket when you want to access",
      homeAdd: "sadipur"
    }
}
// console.log(personDetails2?.wifeDetails?.age)//ekhane wifedetails name kisu nai tai error diche ei error theke bacar jonno "?" ei sgin use korte hobe tahole error dibe na undefined dibe.

// for (elem in personDetails2) {
//   console.log(personDetails2[elem])
//   // console.log(personDetails2["person1"]["age"])
// }
// const keys = Object.keys(personDetails2)
// const values = Object.values(personDetails2)
// const length = keys.length;
const entre = Object.entries(personDetails2);
// console.log(keys)
// console.log(values)
// console.log(length)
// console.log(entre)
for (elem of entre) {
const [x, value] = elem
  console.log(x,value);
}