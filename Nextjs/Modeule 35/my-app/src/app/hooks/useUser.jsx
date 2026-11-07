
import { use } from 'react';


import { Usercontext } from '../context/usercontext';

const useUser = () => {
  const user = use(Usercontext);
  return user;

};

export default useUser;