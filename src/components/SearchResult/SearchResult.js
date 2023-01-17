import React from 'react';

const SearchResult = (props) => {
    const {title , price, category, image} = props.prod
    return (
        <div>
             <div className='flex-row justify-center mt-8'>
            <div className=''>
            <img className='w-[300px] h-[425px]' src={image} alt="" />
            </div>
            <div className='mt-8'>
                <p className='text-[#f80] font-mono text-xl font-semibold' title={title}>{title.length>20 ? title.slice(0,20)+'...' : title}</p>
                <p><small className='font-semibold'>Price: ${price}</small></p>
                <p><small>Category: {category}</small></p>
                <button className='bg-[#025] text-white h-[50px] w-9/12 mt-5 rounded-md text-xl font-mono font-semibold hover:bg-[#f80] hover:text-[#025]'>
                    Buy
                </button>
            </div>
           
        </div>
        </div>
    );
};

export default SearchResult;