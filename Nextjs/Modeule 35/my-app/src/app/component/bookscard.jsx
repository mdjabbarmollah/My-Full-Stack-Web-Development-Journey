'use client';
import Link from 'next/link';
import React, { use } from 'react';
import { Usercontext } from '../context/usercontext';

const Bookscard = ({propss}) => {
  const { id, author, title, price, image, category } = propss
  
const user = use(Usercontext)
console.log(user)
  return (
    <div className="card bg-base-100 w-auto shadow-sm">
  <figure>
    <img
      src={image}
      alt={author} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {author}
      <div className="badge badge-secondary"> {price} </div>
    </h2>
    <p> {title} </p>
    <div className="card-actions justify-end">
          <div className="badge badge-outline">{category} </div>
          
          <Link href={`/books/${id}`}>
          <button className="badge badge-outline">Products</button>
          </Link>
          
          
    </div>
  </div>
</div>
  );


};

export default Bookscard;