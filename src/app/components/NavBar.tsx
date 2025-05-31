import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';
import { RiCustomerService2Line } from 'react-icons/ri';


const NavBar = () => {
  return (
    <div className='border-b border-gray-300'>
      <div className="nav flex justify-evenly p-3 gap-10 px-20 font-sharp">
        <a href="" className="grow-3">Logo</a>
      <div className="flex grow-5 items-center">
        <span className="p-2 px-3 bg-gray-100 rounded-l-3xl text-zinc-500"><LuSearch className="text-xl " /></span> 
        <input type="text" className="outline-0 bg-gray-100 p-2 rounded-3xl  w-full rounded-l-none text-zinc-800 text-sm font-mediumchro" placeholder='Search for t-shirt, hoodie, koozies, and more.'  />
      </div>
  
         <div className="flex items-center gap-2 grow-1">
            <RiCustomerService2Line className='text-2xl text-green-500' />
           <div className="">
            <p className='text-[12px] mb-0.5'> Talk to a Real Person</p>
           <p className='text-green-500 font-medium text-[14px]'> 844-221-2538</p>
           </div>
            </div>
         <div className="flex items-center gap-2 grow-1">
            <IoChatbubblesOutline className='text-2xl text-green-500' />
           <div className="">
            <p className='text-[12px] mb-0.5'>Chat with a Real Person</p>
           <p className='text-green-500 font-medium text-[14px]'> Chat Now</p>
           </div>
            </div>
       
       
      </div>
    </div>
  );
};

export default NavBar;
