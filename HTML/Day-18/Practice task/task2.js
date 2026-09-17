// function bookTicket(movie = "Dune", seat = 1, pricePerseat = 300) {
//   if (typeof movie !== "string" || typeof seat !== "number" ||typeof pricePerseat !== "number" || seat < 0 || pricePerseat < 0) {
//     return "Invalid";
//   }
//   let total = seat * pricePerseat;

//   return `${movie}: ${seat} seat(s),Total $${total}`

  
// }
// console.log(bookTicket("Dune"));
// console.log(bookTicket("Dune", 3))
// console.log(bookTicket("Dune", 2, 450))
// console.log(bookTicket(123, 2))

// function bookTicket(movie,seats = 1,pricePerSeat = 300) {
//   if (typeof movie !== "string" || typeof seats !== "number" ||typeof pricePerSeat !== "number" || seats < 0 || pricePerSeat < 0) {
//     return "Invalid";
//   }
//   let multiply = seats * pricePerSeat;
//   return `${movie}: ${seats} seat(s), Total $ ${multiply}`;

// }


// ternarry operator 
function bookTicket(movie,seats = 1,pricePerSeat = 300) {
  return (typeof movie !== "string" || typeof seats !== "number" || typeof pricePerSeat !== "number" || seats < 0 || pricePerSeat < 0) 
    ? "invalid"
    : `${movie} : ${seats} seat(s) Total $ ${seats * pricePerSeat}` ;
}

console.log(bookTicket("Dune"))

console.log(bookTicket("Dune", 3))

console.log(bookTicket("Dune", 2, 450))

console.log(bookTicket(123, 2))