
import { Suspense } from 'react';
import Searchfood from '../component/searchfood';

const Foodpromise = async () => {
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
  const processbox = await res.json()
  const foods = processbox.data;
  return foods;
}

const Foodpage = () => {


  return (
    <div>

      {/* <Searchfood></Searchfood> */}
      <Suspense fallback={
        <div>
          loading
        </div>
      }>

<Searchfood Foodpromise= {Foodpromise()} ></Searchfood>

      </Suspense>
    </div>
  );
};

export default Foodpage;