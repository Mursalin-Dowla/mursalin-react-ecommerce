import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {
  const { cartItem, handleRemoveFromCart } = props;
  const {title , price,  image} = cartItem;
  return (
    <div className='grid grid-cols-5 mt-5 border border-[#025]'>
    <div className='col-span-1 ml-1 mt-1'>
    <img className='w-[60px] h-[70px]' src={image} alt="" />
    </div>
    <div className='col-span-3'>
        <p  className='text-[#f80] font-mono text-lg font-semibold cursor-pointer tracking-tighter' title={title}>{title}</p>
        <p><small className='font-semibold'>Price: ${price}</small></p>
    </div>
    <div>
        <FontAwesomeIcon onClick={()=>handleRemoveFromCart(cartItem)} className=' col-span-1 text-[#025] h-[30px] w-[70px] mt-4 rounded-md text-sm font-mono font-semibold  hover:text-[#ff0000] cursor-pointer' icon={faTrashAlt}></FontAwesomeIcon>
    </div>
   
</div>
  );
};

export default CartItem;
