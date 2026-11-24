import React from 'react';
interface typesc{
  id: string;
  title: string;
}
const Mostread = async() => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
  const outdata = await res.json
  const getdata = outdata.data

  return (
    <div className='card p-2 bg-base-100 border border-gray-400 mb-5 '>

      <h1>সর্বাধিক পঠিত</h1>
      {
        getdata.map((parametrs,indexes) =>{
          return <div key={parametrs.id}>
            <p>{indexes+1} </p><h2>{parametrs.title}</h2>
          </div>
        })
      }
    </div>
  );
};

export default Mostread;
