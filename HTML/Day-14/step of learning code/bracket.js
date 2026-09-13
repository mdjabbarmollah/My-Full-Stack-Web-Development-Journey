const FahadDetails ={
  name: 'md fahad',
  fathersName: 'md daliluddin mollah',
  mothersName: 'Julekha Begum',
  'brother & sister':'4 siblings'
}
//  ekhane jodi sudu last key ta k access korte cai tahole third bracket lagbe ekhane dot notation kaj korbe na 
console.log(FahadDetails['brother & sister'])
// abr jodi value change korte cai tahole kora jabe jemon tobe dot notation diye ebar oo kaj hobe na 
FahadDetails['brother & sister'] = '2 brother & 2 sister'
console.log(FahadDetails['brother & sister'])
// ekhane variable er majhe oo nam diye onek somoy key er nam hote pare sekhetre key er nam er sathe . dile kaj korbe na se kehtre variable er nam dite hobbe bracket diye 

const key = 'fathersName'
console.log(FahadDetails[key])
// ekhane bracket use kore add oo kora jabe 
FahadDetails['profession & skill'] = 'freelancer & web devlopment';
console.log(FahadDetails)


// ekta logical problem solve kori 
const findoutrepetativething = ['jsx',"jsx",'jsx','jsx',"jsx","js","Ff"]
const count = {}
for (word of findoutrepetativething) {
  if (count[word] === undefined) {
    count[word] = 0;
  }
  count[word]++;
}
console.log(count);
console.log(count['jsx']);