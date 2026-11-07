import React from 'react';
import Productcard from '../component/productcard';
const getproduct = async () => {
  const res = await fetch('http://localhost:5000/products',{cache: 'no-store'});//ssg/ssr
  return res.json();

}

const Productpage =async () => {

  const products =await getproduct()

  return (
    <div>
      <h2>Products:{products.length}</h2>
      
      <div>       
        {
          products.map((item) => {
            return <Productcard key={item.id} propss ={item} ></Productcard>
          })
        }
        </div>
    </div>
  );
};

export default Productpage;