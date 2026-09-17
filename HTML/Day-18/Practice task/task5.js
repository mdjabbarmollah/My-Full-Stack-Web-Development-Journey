function mergeInventory(arr1, arr2) {
  
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  const marege = [...arr1, ...arr2];
  return marege;
}
console.log(mergeInventory([1,2],[3,4]))
console.log(mergeInventory(("3,7,2")));