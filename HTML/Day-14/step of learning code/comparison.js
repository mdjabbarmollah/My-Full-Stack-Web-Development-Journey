const subject = 'chemistry';
const book = 'ChemiStry';
if (subject.toLowerCase === book.toLowerCase) {
  console.log('procur porte hobe')
}
//ekhane to lowercase use korle prothom sorto ta sotti hobe;
else {
  console.log('Noito procur vugte hobe')
}

const emailUserprovided = 'goniMia@.com ';// ekhane ekta space pore gese tai match kore nai
const emailSavedDatabase = 'goniMia@.com';
console.log(emailUserprovided.trim())
console.log(emailUserprovided.trimStart().trimEnd.toUpperCase())
// eta faka space ei gula remove korar jonno use kora hoy.trim abar 3 rokom er.
// ekta ase  samne oo pichone duijagatei space remove korbe
//.trimStart() dile samne theke space remove korbe
//.trimEnd dile peson theke space remove korbe
// abar ei gulo korar sathe toLowercase oo toUpercase use kora jabe 
if (emailSavedDatabase === emailUserprovided) {
  console.log('welcome to website.')
} 
else {
  console.log('dure giye mor')
}