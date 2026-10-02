/**
 * variable
 * conitionals
 * loops
 * array
 * function
 * object
 * arrow function
 */

const brand : string = 'apple';
if (brand === 'samsung') {
  const isExpensive = true;

}
// inference: implicit 
for (let i:number = 0; i < 10; i++){
//likhle oo hoy na likhle o hoy 
}
const letters: string[] = ['a', 'b', 'c']
for (const letter of letters) {
  console.log(letter.tofixed)// eta kaj korbe na cz ekhane bole deya hoyese j string type data; tai to fixed kaj korbe na;ekhane toUpercase dile kaj korbe ba string related method kaj korbe.
}

const getlargerName = (person1:string, person2:string) :boolean =>{
  if (person1.length > person2.length) {
    return person1;
  }
  return person2;
}
const biggerName = getlargerName('alice', 'bob');
