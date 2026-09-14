


//


// problem 5***************************
// let str ="programming";
// console.log(str[10]);
// console.log(str.length);
// console.log("string length", str[str.length - 3]);
// let reverseword = "";
// for (let reverse = str.length - 1; reverse >= 0; reverse--){
//   let letter = str[reverse];
//   console.log( str[reverse])
//   reverseword = reverseword + letter;
// }
// console.log(reverseword);


// let name = "bangladesh";
function fahad(name) {
  let store = "";
  for (let j = name.length - 1; j >= 0; j--) {
    // console.log(j);
    let word = name[j];
    store += word;
   }
  return store;
   }
console.log(fahad(name));

//