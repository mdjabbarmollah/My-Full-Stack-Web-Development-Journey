import React from 'react';
import Image  from 'next/image';
import Link from 'next/link';
const Foodcard = ({ propss }) => {
  const {id,dish_name,image_link} = propss
  return (
    <div className="card bg-base-100 w-auto shadow-sm">
      
  
  <figure>
        <Image 
         width={400}
          height={500}
          src={image_link}
          alt="Food Image"/>
       
  </figure>
  <div className="card-body">
    <h2 className="card-title">

      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{dish_name} </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
          <Link href={`/menu/${id}`}>
           <div className="badge badge-outline">Show Deatils</div>
          </Link>
    </div>
  </div>
</div>
  );
};

export default Foodcard;