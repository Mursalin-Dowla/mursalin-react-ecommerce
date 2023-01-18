import React from 'react';
import image from '../../images/mypic.jpg'
const Footer = () => {
    return (
        <div className='flex-row mt-20'>
           <div className='grid md:grid-cols-3 grid-cols-1 md:justify-items-center bg-gray-900 pt-7 pb-5 pl-7'>
            <div className='text-white font-serif tracking-tighter text-sm m-2'>
               <h1>Address:</h1>
               <p>location: 5/3 Sobhanbagh</p>
               <p>PO: Dhaka-1207</p>
               <p>City: Dhaka</p>
               <p>Country: Bangladesh</p>
            </div>
            <div className='text-white font-serif tracking-tighter text-sm m-2'>
                <h1>Contact:</h1>
                <p>Email: mursalindowla844@gmail.com</p>
                <p>Phone: +88019972440442</p>
            </div>
            <div className='text-white'>
                <h1 className='mb-2 text-center font-bold'>Developer:</h1>
                <div className='grid grid-cols-2 justify-items-center'>
                <img className=' h-16 w-12 rounded-full' src={image} alt="" />
                <p className='mt-5 text-[#f80]'>Md Mursalin Dowla</p>
                </div>
            </div>
           </div>
           <div className='text-center text-white bg-[#025]'>
            <p>Copyright©Md Mursalin Dowla 2023</p>
           </div>
        </div>
    );
};

export default Footer;