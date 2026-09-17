function describeDeclaration (String) {
  if (String === "var") {
    return "Can redeclare, can reassign";
  }
  else if (String === "let") {
    return "Cannot redeclare, can reassign";
  }
  else if (String === "const") {
    return "Cannot redeclare, cannot reassign"
  }
  else {
    return "invalid";
}
}
let result = describeDeclaration("int");
// console.log(result);

function describeDeclaration(String) {
  const rules = {
    "var": "Can redeclare, can reassign",
    "let": "Cannot redeclare, can reassign",
    "const": "Cannot redeclare, cannot reassign"
  }
  const result = rules[String] || "invalid";
  return result;
}
// console.log(describeDeclaration("ggd"))


function describeDeclration(practice1) {
  let rules = {
    ";et":"Cannot redeclare, can reassign",
    "const":"Cannot redeclare, cannot reassign",
    "var": "Can redeclare, can reassign"
  }
  return "Invalid";
}
console.log(describeDeclration("int"));