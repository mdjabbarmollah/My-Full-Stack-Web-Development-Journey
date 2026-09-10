let car = { brand: "Toyota", model: "Corolla", year: 2022 };

car.year = 2023;
car['color'] = 'blue';
console.log(car)
const usingvracketNotation = car['model']
console.log(car.brand)
console.log(usingvracketNotation)