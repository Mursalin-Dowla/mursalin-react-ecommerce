import React, { useContext, useState } from 'react';
import CustomLink from "../../utilities/CustomLink";
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCartShopping,faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../App';

const Header = () => {
    let [open, setOpen]=useState(false);
    const myCart = useContext(MyContext);
    const {cart, setCart} = myCart;
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#025] py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='mr-1 pt-2'>
            <img className='w-6 h-6 mb-1' src={Logo} alt="" />
        </span>
        mursalin's
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-8 top-3 cursor-pointer md:hidden'>
      {open ?<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#025] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[65px] ':'top-[-490px]'} ${open ? 'w-[200px] ':'w-[200px]'}`}>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/category'>Category</CustomLink>
            <CustomLink to='/aboutus'>Contact</CustomLink>
            <CustomLink to='/search'>Search <FontAwesomeIcon className='text-[#F80]' icon={faSearch}></FontAwesomeIcon></CustomLink>
            <CustomLink to='/cart'>
              <div className='flex'>
              <div>
              <FontAwesomeIcon className='text-white' icon={faCartShopping}></FontAwesomeIcon>
              </div>
              <div className='bg-[#ff0000] text-white h-4 rounded-full w-3 text-xs ml-[2px] mb-[5px] font-bold'>
                {cart.length}
              </div>
              </div>
             
            </CustomLink>
      
      </ul>
      </div>
    </div>
    );
};

export default Header;