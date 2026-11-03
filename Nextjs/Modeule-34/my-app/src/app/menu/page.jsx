import React from 'react';
import Foodcard from '../component/foodcard';

const Menupage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods");
  const data = await res.json()
  console.log(data)

  const foods = data.data;
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        foods.map((item) => {
          return <Foodcard key={item.id} propss = {item} />
        })
      }
    </div>
  );
};

export default Menupage;
