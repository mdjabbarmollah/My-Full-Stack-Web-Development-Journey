/**
 * 1.dara source || json
 * json.stringify()
 * json.parse()
 * .json()
 * 
 * 
 */
//calback function
//data delete kora update kora data niye asar jonno amra eta k use korbo
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => { console.log(data) })

//async await
async function loaddata() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return data;
}  
console.log(loaddata())
//async await er .json er madhome upore j kaj ta korlam seta jodi traditional waty te kortem tahole

// async function manually() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
//   const rawText = await res.text()
  
//   const data = JSON.parse(rawText)
  
// return data
// }
                  
