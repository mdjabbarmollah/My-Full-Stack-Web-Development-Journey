const book: {
  name: string,
  author: string,
  price: number,
  isUsed?: boolean,//optional property set
  pages: number,
}
  = {
  name: "fahad",
  author: "daliluddin",
  price: 500,
  // isUsed: true,
  pages: 200,
}
book.name = 'physics';
console.log(book)
const mixed_propertyset: [number, string] = [45, 'book price']
const stringarray: string[] = ['dopamin detox', 'how to talk with anyone', 'the art of war']
const number_array_it_couldbe_any_type_of_number_like_runcount: number[] = [44, 54, 6, 45, 76, 23, 23, 32]
const shopinglist: [string, number] = ['iphone', 1500]
export { }