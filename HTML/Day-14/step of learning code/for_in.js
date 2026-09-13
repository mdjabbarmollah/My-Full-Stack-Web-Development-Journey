// const numbers = [22, 3, 23, 43, 65, 76, 34];
// for (const num of numbers) {
//   console.log(num)
// }//for of array er upor use kora hoy r for in object er upor use kora hoy.
const stringArray = {
  name: ['fahad', 'Feme', 'fatema', 'faisal'],
id:234,
}
// for (const string in stringArray) {
//   console.log(string)
//   // const stringsvaluechanged = stringArray[string]
//   // console.log(stringsvaluechanged[3],value)
//   const value =stringArray[string] 
//   console.log(string, value);
// } 

// in method asar age jevabe korto object er value output korto
const ObjectFindoutput = Object.keys(stringArray);
for (const key of ObjectFindoutput) {
  const value = stringArray[key]
  console.log(key,value)
}
