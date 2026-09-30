// object distucturing
const user: {
  ID: number,
  name: string,
  age: number,
  isAdmin: true
}
= {
 ID: 2343,
  name: 'fahad',
  age: 34,
  isAdmin: true
}
const age = user.age;
const name = user.name;
const { age, name } = {name: 'jhon',age:30,isAdmin:true};
const { age, isAdmin } = user;

const { age, isAdmin } = user;
const userInfo = ['Rohomot Ali', 25];
const [name, age]

// array distucturing 
const =['ab jabbar', 'Fahad', 324, 43, 3, 2,];
// jodi array desturcturing korte cai tahole bam pase third bracket er majhe je;keno nam diye destructuring kora jabe tobe obeject destructuring korar jonno dan pase j nam ase se nam diyei  likht hobe pore rename kora jabe;
const [username,username2,age,id,ammount,] = ['ab jabbar',324,43,3,2]
console.log(username, age)

export{}