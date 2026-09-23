let grade = (students) => {
   const gradeFunction = (marks) => {
      if (marks >= 90) {
      return  "A+"
    }
    else if (marks >= 80) {
      return  "A"
    }
    else if (marks >= 60) {
      return "A-"
    }
    else {
      return  "Fail"
    }
    }
  let modifiedstudent = students.map(student => {
    // console.log(student, "student");
   
const{name,marks} = student
    const newstudentwithgrade = {name,
      marks,
      grade: gradeFunction(marks)
    }
    
    return newstudentwithgrade;
  })
  return modifiedstudent;
  // console.log(modifiedstudent)
}

let students = [
  { name: "Rafi", marks: 50 },
  { name: "karim", marks: 95 }
  
]
// console.log(grade(students))
// console.log(students)



// problem 2
const cartcalculate = (products) => {
  // console.log(products);
  let totalItem = 0;
  let totalPrice = 0;
  for (let foreverysingleproductcalculate of products) {
    const {price,qty} = foreverysingleproductcalculate
    totalItem += qty
    totalPrice += (price * qty)
  }
  // console.log(totalItem, totalPrice)
  return `Total: ${totalItem} items, ${totalPrice} Taka.`
}

const products = [
    { name: "pen", price: 100, qty: 1 },
    {name: "Notebook",price:50,qty:2},
]
console.log(cartcalculate(products))
  