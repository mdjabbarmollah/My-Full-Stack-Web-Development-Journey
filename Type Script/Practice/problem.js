function product(name, price, isavaiable) {
    return `${name} cost ${price} and is available ${isavaiable}`;
}
let result = product('laptop', 45000, true);
console.log(result);
// task2
function printUser(name, age) {
    return `${name} is ${age} years old.`;
}
console.log(printUser("Amina", 22));
// task 3
let array = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
console.log(`Total student:${array.length}`);
// let students: string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
// let total = 0;
// for (let student of students) {
//   total += 1; // প্রতিটি স্টুডেন্টের জন্য ১ যোগ করা হচ্ছে
// }
// console.log(`Total student: ${total}`);
// task 4 
const userObject = {
    name: 'Amina',
};
const emailtext = userObject.email ? userObject.email : "Not provided";
console.log(`Name: ${userObject.name},Email : ${emailtext}`);
// problem 5 
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(8));
// problem 6 
function sumAll(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));
// problem 7
function mergearray(num, num1) {
    return [...num, ...num1];
}
console.log(mergearray([1, 2, 3], [4, 5, 6]));
// problem 8
function numcheck(num) {
    return num > 0 ? 'positive' : 'negative';
}
console.log(numcheck(5));
// problem 9
function defult1(name = 'Guest') {
    return name;
}
console.log(defult1(undefined));
// problem 10 
let check = "Hello";
if (typeof check === 'string') {
    console.log(check);
}
// problem 11
let userinfo = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};
console.log(`Name: ${userinfo.name}
  Age:${userinfo.age}
  email:${userinfo.email}
  skills:${userinfo.skills}
  Active:${userinfo.active}`);
// extra challenge 
let shopingcartObject = {
    user: "md fahad",
    item: ["pen", 'ball', 'book'],
    totalAmmount: 300,
    isPaid: true
};
console.log(shopingcartObject);
function checkLogin(islogedIn) {
    if (islogedIn) {
        return "Welcome back,User!";
    }
    else {
        return "Please log in to continue.";
    }
}
console.log(checkLogin(true));
let wrray = [23, 4234, 443, 54, 55434, 233, 23];
const evenNumber = [];
for (let num of wrray) {
    if (num % 2 === 0) {
        evenNumber.push(num);
    }
}
console.log(evenNumber);
let arraofNumber = [243, 43, 434, 242, 545, 65, 545, 43];
let checkeven = arraofNumber.filter((even) => {
    let result = even % 2 === 0;
    return result;
});
console.log(checkeven);
function arrayofnumbers(numbers) {
    return numbers.filter((even) => {
        let result = even % 2 === 0;
        return result;
    });
}
console.log(arrayofnumbers([343, 545, 323, 46, 667, 65, 45, 667, 88, 34]));
// p3
let nestedObject = {
    name: 'fahad',
    age: 34,
    address: {
        city: 'Faridpur'
    }
};
console.log(nestedObject.address?.city);
const details = {
    name: 'fahad',
    age: 33,
    profession: 'student',
};
console.log(details);
function safefunction(numbers) {

    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return [total];
}
console.log(safefunction([3434, 3244, 43423, 434, 23,]));
export {};
