import React from 'react';

const FoodDetail =async ({params}) => {
  const { foodid } = await params
    
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodid}`)
  const data = await res.json()

  const food = data.data;
console.log(food)
  const {dish_name,alternative_names,category}= food
 
  // const {alternative_names}
  return (
    <div>
      <h1>Food id:{foodid}</h1>
      <h2>{dish_name}</h2>
      <p>{alternative_names} </p>
      <p>{category} </p>
    </div>
  );
};

export default FoodDetail;