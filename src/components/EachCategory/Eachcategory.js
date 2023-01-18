import React from 'react';

const Eachcategory = (props) => {
    const {item} = props
    return (
        <div className='shadow-2xl shadow-sky-700 h-56 w-56 text-center mt-20 cursor-pointer transition-all ease-in duration-500 bg-slate-200
        rounded-xl  hover:bg-[#f80] text-sky-900 hover:text-white'>
           <p className='mt-24  text-2xl font-mono font-semibold uppercase '>{item}</p>
        </div>
    );
};

export default Eachcategory;