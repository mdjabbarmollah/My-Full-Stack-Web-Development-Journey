//  ******EKTA NUMBER NITE HOVE JODI ETA 3 DIYE NISESH A VAG O TAHOLE PRINT FIZ
// R JODI
// 5 DIYE HOY TAHOLE
// PRINT 5
let number = 15;
for (let i = 1; i <= number; i++){
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ Buzz");
  }
  else if (i % 3 === 0){
    console.log("Fizz");
  }
  else if (i % 5 === 0){
    console.log("buzz");
   }
   else {
     console.log(i);
   }
}

function divisible(number) {
  for (let i = 1; i <= number; i++) {
  
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZ Buzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("buzz");
    }
    else {
      console.log(i);
    }
  }
 
}
divisible(15);