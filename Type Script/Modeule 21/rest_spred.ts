const device = {
  name: 'iphone',
  type: 'smartphone',
  price: 999,
  color: 'black',
  storage: 128
};
// rest destructuring
const { name: deviceName, ...deviceinfo } = device;
// spread destructuring 
const numbers: number[] = [13, 54, 434, 54, 64, 43, 34, 3];
const newNumber:number []= [3,5,2,5,676,344,2,2]
const closerfriends: string[] = ['alice', 'bob', 'charlie']
const allNumbers: string[] = [...closerfriends];
