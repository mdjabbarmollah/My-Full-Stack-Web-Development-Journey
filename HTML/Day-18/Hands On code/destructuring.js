// traditional way  **********
const numbers = [10, 30, 39, 49, 43,50,349]
// const ten = numbers[0]
// const thirty = numbers[1]
// console.log(ten, thirty);
const [a, b,,,f,,h] = numbers  //destructure way
console.log(a, b, f, h)

const employe = {
  name: "habib",
  id: 34,
  age: 40,
  marks: {
    bangla: 59,
    english: 50,
    math : 30
  }
}

// const name = employe.name//traditonal way
// // const id = employe.id
// const modifiedid = employe.marks.bangla
// console.log(name, modifiedid)


const {age,id:modifiedwayid,marks:{bangla,english}} = employe//destructure way
console.log(age,modifiedwayid,bangla,english)