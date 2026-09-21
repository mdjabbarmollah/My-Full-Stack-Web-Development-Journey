// find out first element based on condition 
let num = [10, 20, 49, 50,543,534]
let findout = num.find((ele) => {
  return ele >= 500;
})
// console.log(findout)

let phones = [
  {
   model : "iphone 14",
price : 3300
  },
  {
    model: "i phone 15",
    price: 4345
  },
  {
    model: "samsun m 31",
    price: 2999
  },
  {
    model: "samsun 31",
    price: 2555
  }

]
// expensive phone 
let expensivemodel = phones.filter(phones => {
  // console.log(phones);
  return phones.price >= 4000;

})//medium shorter way
let chipestPhone = phones.filter(phones => phones.price <=3000)//moreshorter way
console.log(expensivemodel);
console.log(chipestPhone);
