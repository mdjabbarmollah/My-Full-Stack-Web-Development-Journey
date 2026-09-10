let scores = { math: 90, science: 85, art: 95 };
for (let obj in scores) {
  const result = obj + ":"+ scores[obj]
  console.log(result)
}