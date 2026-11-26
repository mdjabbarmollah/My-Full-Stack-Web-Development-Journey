
import Image from 'next/image';

import Navbar from './Navar';


const Header = () => {
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: "full"
  });
  
  return (

    <header>
        <div className=' grid grid-cols-3  max-w-5xl mx-auto items-center border-b border-gray-200 px-6 py-2  w-full '>
<div className=''></div>
      <div className='flex  flex-col items-center justify-center m-4 gap-1' >
      <div className='flex items-center justify-center'>
      <Image className='w-10 h-10' height={50} width={50} src={'/Logo.webp'} alt='' />
      <h2>Bangla News 24</h2>
       
      </div>
      <div>
         <p>{date}</p>
        </div>
      </div>

      <div className='flex justify-end gap-[15px]'>
        
        <button>সাইন ইন</button>
        
          <button className="btn btn-secondary">সাইন আপ</button>
          
      </div>
      </div>
      
<Navbar/>

    </header>
    
  );
};

export default Header;