let prices = [100, 200, 342, 545, 543]
let highestPrice = prices.filter((ele, ind, array) => {
  // console.log(ele)
  if (ele >= 600) {
    return true;
  }
  return false;
})
console.log(highestPrice);