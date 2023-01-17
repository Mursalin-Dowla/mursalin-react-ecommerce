import React from 'react';
import useProducts from '../../hooks/useProducts';
import ShowProduct from '../ShowProduct/ShowProduct';
import ShowSuggestions from '../ShowSuggestions/ShowSuggestions';

const Home = () => {
    const [products, setProducts] = useProducts();
    let suggestions = products.slice(15,19);
    return (
        <div className='mt-20 ml-5 mr-5 grid grid-cols-4'>
            {/* show products */}
            <div className='m-10 col-span-3'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10'>
              {
                products.map(product=> <ShowProduct key={product.id}
                    product ={product} />)
              }
           </div>
            </div>
          
            {/* show suggestions at the side bar */}
           <div className='col-span-1 border-[3px] border-l-[#025] border-y-0 border-r-0 max-h-[400px] grid'>
              <div className='m-auto border-[3px] border-b-[#025]'>
              <h1 className='font-mono text-[#025] font-semibold text-xl bg-[#f80]'>For You</h1>
            </div> 
            <div >
              {
                suggestions.map(suggestion=><ShowSuggestions 
                key={suggestion.id}
                suggestion={suggestion}
                />)
             }
             </div>
           </div>
        </div>
    );
};

export default Home;