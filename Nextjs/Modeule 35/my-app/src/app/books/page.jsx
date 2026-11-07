import React from 'react';
import Bookscard from '../component/bookscard';
const Booksdataload =async()=> {
  const res = await fetch('http://localhost:5000/books',
    {
      next:{revalidate:20}
      
      // cache: 'force-cache'
    })
  
  
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  return res.json()
}
const Bookspage = async () => {
  
const resolvedata = await Booksdataload()
  return (
    <div>
      <h2>Books :{resolvedata.length} </h2>

      <div className='grid grid-cols-3 gap-5'>
        {
          resolvedata.map((item) => {
            return <Bookscard key={item.id} propss = {item}></Bookscard>
          })
        }
      </div>
    </div>

  );
};

export default Bookspage;