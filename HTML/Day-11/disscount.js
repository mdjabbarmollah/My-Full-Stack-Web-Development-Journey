const totalAmount = 1500;
if (totalAmount > 5000) {
  const discount = 30;
  const discoumtAmount = totalAmount / 100 *discount;
  const payment = totalAmount - discoumtAmount;
  console.log("please payment =",payment);
}
else if( totalAmount > 1000) {
  const discount = 10;
  const discountAmount = totalAmount / 100 * discount;
  const payment = totalAmount - discountAmount;
  console.log("please pay 10% off =",payment);
}
else {
  console.log("Please Pay", TotalAmount);
}