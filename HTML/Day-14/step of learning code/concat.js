const firstname = 'silver';
const lastname = 'gold';
const stringadd = (firstname.concat(' ', lastname, ' chowdhury'))// string jora laganor jonno use kora hoy 
console.log(stringadd)

// Bangla Translation & Answer (বাংলা উত্তর):
// JavaScript-এ concat() (Concatenation-এর সংক্ষিপ্ত রূপ) মেথডটি মূলত একাধিক String (লেখা) অথবা Array (তালিকা) একসাথে জোড়া লাগানোর (join/combine করার) ক্ষেত্রে ব্যবহার করা হয়।

// এর মূল বৈশিষ্ট্য হলো, এটি মূল String বা Array-কে পরিবর্তন না করে একটি নতুন String বা Array তৈরি করে দেয়।

// ১. String (লেখা) জোড়া লাগানোর ক্ষেত্রে:
// দুটি বা তার বেশি টেক্সট একসাথে যুক্ত করতে এটি ব্যবহার করা হয়।

// JavaScript
// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName.concat(" ", lastName); 
// console.log(fullName); // Output: "John Doe"
// ২. Array (তালিকা) জোড়া লাগানোর ক্ষেত্রে:
// দুই বা ততধিক Array-কে একত্র করে নতুন একটি Array বানাতে এটি ব্যবহৃত হয়।

// JavaScript
// let fruits = ["Apple", "Banana"];
// let vegetables = ["Carrot", "Potato"];

// let foodList = fruits.concat(vegetables);
// console.log(foodList); // Output: ["Apple", "Banana", "Carrot", "Potato"]