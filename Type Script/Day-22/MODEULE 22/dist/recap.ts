/**
 * variable(basic types)
 * array
 * function
 * object
 * some more basic
 */
const remamorization: string = 'what is the way over come bad truma';

const thought: string = 'I think there s have a way that focus on the work & always saty present.Try to enjoy & feel todays every moment because life is too short';

const distraction_stress: string[] = ['reels', 'more talking without any reason', 'try to solve every thing immidietly andy need every thing very quick', 'you think all of the problem solving is your own responsibility'];

function problemsolvinginrealLife(trytoavoidunlessUselessthing: string, setboundries: string, takenote: string, price: number,discount:number) :string{
  if (discount === undefined) {
    discount = 0;
  }
  return `${trytoavoidunlessUselessthing} ${setboundries} ${takenote} ${price - discount}.`
}
let Objectdeclaration: {
  name: string,
  age: number,
  father: string,
  qualification:{
  ssc: string;
  hsc ?: string;
};

}= {
  name: 'fahad',
  age: 26,
  father: 'Dalilduddin Mollah',
  qualification:{
    ssc: 'sadipur high school',
  }
}
export{}
console.log(Objectdeclaration.age);
console.log(Objectdeclaration.father);

// union type string |number | boolean | unknown| null

