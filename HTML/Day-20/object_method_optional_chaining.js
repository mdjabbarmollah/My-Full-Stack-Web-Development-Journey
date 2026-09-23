const getmostExpensiveProduct = (product) => {
  // console.log(product)
  // array te convert korlam 
  const productkeysfindout = Object.keys(product)
  // console.log(productkeysfindout)
  // ekhon array er upor loop itarate kora holo
  // let sum = 0;
  let highest = 0;
  let expensiveproductName = ""
  for (let forexpensiveproductfindout of productkeysfindout) {
    // console.log(forexpensiveproductfindout, product[forexpensiveproductfindout])
    // sum += product[forexpensiveproductfindout];
    if (highest < product[forexpensiveproductfindout]) {
      highest = product[forexpensiveproductfindout];
      expensiveproductName = forexpensiveproductfindout
    }
  }
  // return sum;
 
  // return expensiveproductName;
  // object format return 
  return {
    name: expensiveproductName,
    // price: highest
  };
}

console.log(getmostExpensiveProduct({ pen: 20, sportscar: 400, book: 400, bag: 600, umberalla: 2000 }))
console.log(
  getmostExpensiveProduct({
    pen: 20,
    sportscar: 40000,
    book: 400,
    bag: 600,
    umberalla: 2000
  })
);

const expensiveproductfindout = (product) => {
  const convertproductobjecttoArray = Object.entries(product)
  // console.log(convertproductobjecttoArray)
  let highest = 0;
  let expensiveproductName = "";
  convertproductobjecttoArray.reduce((accumulator, currentvalue) => {
    const productName = currentvalue[0];
    const productprice = currentvalue[1];
    if (highest < productprice) {
      highest = productprice
      expensiveproductName = productName;
    }
  }, 0);
  return expensiveproductName;
}
console.log(expensiveproductfindout({ pen: 20, book: 400, bag: 600,sportscar:1000000, umberalla: 2000,car:4000,vipcar: 50000}))

let user = {
  name: "jamal",
  address: {
    city: "faridpur"
  }
}
 
 let user1 = {
  name: "fahad",
  // address: null
}
const nestedAccess = (user) => {
  return user?.address?.city;//app crash theke bacate caile optional chaining use korte hobe must
}
console.log(nestedAccess(user1))
console.log(nestedAccess(user))