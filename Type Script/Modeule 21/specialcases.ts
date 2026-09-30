// union type 
function calculateDiscount(amount: number | string | null, taxrate: number): number {
  if (amount === "string") {
    amount = parseFloat(amount)
  }
  return amount * taxrate;
}
const myTax = calculateDiscount(100, 0.15)
// null type 
const myfuture: null | number | string = null;

// unknown
// any
//null
//never
// undefined

//ei rokom kisu format ase je gulo kokhonoi check kora hoy na ,
//  ei gulo khub kom use kora hoy 
