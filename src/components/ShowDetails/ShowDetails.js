import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ShowDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='mt-20 min-h-screen m-20'>
            <img className='w-[300px] h-[425px]' src={product.image} alt="" />
            <p className='mt-10 text-[#f80] font-semibold text-lg font-mono tracking-tight'>{product.title}</p>
            <p className='mt-5'><span className='text-red-700'>Description:</span>  <br/>{product.description}</p>
            <p className='mt-5'><small>Category: <span className='uppercase'>{product.category}</span></small></p>
            <p><small className='font-bold'>Price: ${product.price}</small></p>
        </div>
    );
};

export default ShowDetails;