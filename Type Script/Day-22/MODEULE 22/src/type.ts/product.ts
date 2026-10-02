type product = {
  name: string;
  id: number;
  Brand: string;
  gender?: gender;
}
const products: product[] = [{name: 'potato',
  id : 21,
  Brand : 'pran',
}]
type gender = 'male' | "female" | 'private';

 
  
  
