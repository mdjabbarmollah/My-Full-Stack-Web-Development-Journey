import Newscard from '@/app/component/newscard';
import React from 'react';

const Categorynews = async({params}) => {
  const { categoryid } = await params 
  const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
  const data = res.json;
  const getdata = data.data

  return (
    
    <div>
      <h1>{data.title}</h1>
      {
       Categorynews.map((cn)=><Newscard key={cn.id} propsss={cn}/>) 
      }
    </div>
  );
};

export default Categorynews;