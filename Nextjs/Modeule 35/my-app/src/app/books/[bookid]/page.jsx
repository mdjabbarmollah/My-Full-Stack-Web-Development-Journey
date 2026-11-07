import React from 'react';

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5000/books')
  const rb = await res.json();
  // return rb.slice(1,3).map(book => ({bookid:book.id}))
  return rb.map(book => ({bookid:book.id}))
}






const Bookdetails = async({params}) => {
  const {bookid} = await params;
  
  const res = await fetch(`http://localhost:5000/books/${bookid}`)
  const book = await res.json();
  return (
    <div>
      <h2>Book Detailss </h2>
      <h3>Description:{book.title}</h3>
      <p>Author:{book.author}</p>
      <p>price :{book.price}</p>
    </div>
  );
};

export default Bookdetails;