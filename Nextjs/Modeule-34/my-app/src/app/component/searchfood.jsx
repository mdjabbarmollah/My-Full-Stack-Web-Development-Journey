"use client"
import  React, { use, useEffect, useState } from 'react';

const Searchfood = ({Foodpromise}) => {
  const foods = use(Foodpromise);
  // const [foods,setFoods] = useState([])

  // const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods");
  // const data = await res.json()
  // const foods = data.data


//   useEffect(() => {
//     fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
//       .then(res => res.json())
//     .then(data => setFoods(data.data|| []))
//  },[])

  return (
    <div>
      <h1>Top Foods:{foods.length}</h1> 
    </div>
  );
};

export default Searchfood;