import React, { useEffect, useState } from 'react';
import SearchResult from '../SearchResult/SearchResult';

const Search = () => {
    const [inputText, setInputText] = useState('')
    const [pcategory, setPcategory] = useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${inputText}`)
        .then(res=>res.json())
        .then(data=>setPcategory(data))
    },[inputText])

    const handleInput = (e) =>{
        setInputText(e.target.value)
    }
    return (
        <div className='mt-20 min-h-screen'>
        <div>
           <h1 className="flex justify-center m-5 p-5 text-[#f80] md:text-4xl text-2xl font-black tracking-widest">Search By Category</h1>
           <div  className="flex justify-center m-5 p-5">
           <input onChange={handleInput} type="text" name="" id="" placeholder="Type Here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 p-2.5 dark:bg-[#025] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
         </div>

            <div className='m-10'>
                <div className='text-center m-5 text-[#025] font-mono font-semibold text-xl tracking-tighter'>
                <h1>{pcategory.length} Product found:</h1>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center'>
                 {
                    pcategory.map(prod=><SearchResult key={prod.id}
                    prod={prod}
                    />)
                 }
                 </div>
            </div>
        </div>
    );
};

export default Search;