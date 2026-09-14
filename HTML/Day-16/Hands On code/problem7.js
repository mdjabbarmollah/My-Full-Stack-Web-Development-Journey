// // let pw = "madam";
// let pw = "dad";
// // console.log(pw.length)
// let pw2 = "";
// let count = 0;
// // let i = pw;
// for (let i = 3 - 1; i >= 0; i--) {
//   // console.log(i);
//   let reverse = pw[i];
//   pw2 += reverse;
//   count++;
  
// }
// console.log(pw2.length);
//   if (pw === pw2) {
//     console.log("palindrome");
//   }
//   else {
//     console.log("not palindrome");
//   }
// // console.log(pw2.length);
// // console.log(count);

let pw = "madam"
let reverse = "";
function isp(check) {
  for (let i = check.length-1; i >= 0; i--) {
    let letter = check[i];
    reverse += letter; 
  } 
  if (reverse === check) {
    return "palidrome";
  }
  else {
    return 'not pelidrome'; 
  }
  
}
console.log(isp(pw));
