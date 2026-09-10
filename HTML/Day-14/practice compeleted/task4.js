// const reversefunction =(using) => {
//   const slpliting = using.split("");
//   const reversing = slpliting.reverse()
//   console.log(reversing)
//   let joining = reversing.join("");
//   return joining
// }
// console.log(reversefunction('tpircSavaj'));

const forloopreversefunction = (using1) => {
  let joining = "";

  for (let letter of using1) {
 joining = letter.join("")+ joining 
  }
  return joining
}
console.log(forloopreversefunction("tpircSavaj"))

