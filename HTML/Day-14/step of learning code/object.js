const cap = ['khaki', 'cr7', 250, 300];
const sunglass = {
  name: 'rayban',
    color:'white',
    price:340,
}
const phone = {
//key      value
  brand: 'samsung',
  price: 31000,
  model: 'm31',
  isGlobal: true,
  supportedApps:['Java,andorid,microsoft,linux']
}
const FahadDetails ={
  name: 'md fahad',
  fathersName: 'md daliluddin mollah',
  mothersName: 'Julekha Begum',
  siblings:'4 siblings'
}
// eta holo easy way te object er vlaue ber kora dot notation diye
const objectoutingofTHEbracket = FahadDetails.name
console.log(FahadDetails)
//object value change 
FahadDetails.name = "md jabbar mollah";
console.log(FahadDetails)
