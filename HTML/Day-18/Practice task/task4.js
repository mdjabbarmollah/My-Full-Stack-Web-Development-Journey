function calculateBMI(weight,height ) {
  if (weight < 1 || height < 1) {
    return "Invalid";
  }
  // let heights = height * height;
  // let bmi = weight / (height * height);
  // let convert1 = bmi.toFixed(2);
  // let result = Number(convert1);
  // return result;
  return Number((weight / (height * height)).toFixed(2))
}
console.log(calculateBMI(70, 1.75))
console.log(calculateBMI(50, 1.6))
console.log(calculateBMI(60, -1.7))