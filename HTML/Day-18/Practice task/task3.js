function generateReceipt(customerName,items,total) {
  if (!Array.isArray(items)|| items.length === 0) {
    return "Invalid";
  }
  return `Receipt for ${customerName} 
   Items: ${items}
   Total:$${total}`;
}
// console.log(generateReceipt("Sadia", ["Milk"], 60))
console.log(generateReceipt("Tanvir", [54,"45"], 0))