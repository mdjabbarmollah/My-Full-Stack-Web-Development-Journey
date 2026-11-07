import React from 'react';

const Productcard = ({propss}) => {
  
  const {id,name,price,category,description,image} = propss
  return (
   <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary"> {price} </div>
    </h2>
    <p> {description} </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category} </div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  );
};

export default Productcard;