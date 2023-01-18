import React from 'react';
import {useNavigate } from 'react-router-dom';

const ShowProduct = (props) => {
    const navigate = useNavigate();
    const {title , price, category, image, id} = props.product;

    const ShowProdDetails = ()=>{
       const path = `/shop/${id}`
       navigate(path);
    }
    return (
        <div className='flex-row justify-center'>
            <div className=''>
            <img className='w-[200px] h-[250px]' src={image} alt="" />
            </div>
            <div className='mt-8'>
                <p onClick={ShowProdDetails} className='text-[#f80] font-mono text-xl font-semibold cursor-pointer' title={title}>{title.length>20 ? title.slice(0,20)+'...' : title}</p>
                <p><small className='font-semibold'>Price: ${price}</small></p>
                <p><small>Category: {category}</small></p>
                <button className='bg-[#025] text-white h-[50px] w-9/12 mt-5 rounded-md text-xl font-mono font-semibold hover:bg-[#f80] hover:text-[#025]'>
                    Buy
                </button>
            </div>
           
        </div>
    );
};

export default ShowProduct;