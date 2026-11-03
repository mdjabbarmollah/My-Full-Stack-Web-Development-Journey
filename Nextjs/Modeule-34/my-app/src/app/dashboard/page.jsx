import React from 'react';
import Counter from '../component/counter';

const Dashboardpage = () => {
  console.log('Dashboard')
  return (
    <div>
     <Counter></Counter>
      <h2>Dashboard Page</h2>
      <ul>
<li>Dashboard-1</li>
        <li>Dashboard-2</li>
      </ul>
     
    </div>
  );
};

export default Dashboardpage;
