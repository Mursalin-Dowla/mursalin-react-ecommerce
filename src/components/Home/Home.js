import React from 'react';
import useProducts from '../../hooks/useProducts';
import ShowProduct from '../ShowProduct/ShowProduct';
import ShowSuggestions from '../ShowSuggestions/ShowSuggestions';

const Home = () => {
    const [products, setProducts] = useProducts();
    let suggestions = products.slice(15,19);
    return (
        <div className='mt-20 ml-5 mr-5 grid grid-cols-4 min-h-screen'>
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
           <div className='col-span-1 border-[3px] border-l-[#025] border-y-0 border-r-0 max-h-[400px] fixed right-0 top-20'>
              <div className='m-5 grid grid-cols-1 justify-items-center'>
              <h1 className='font-mono text-[#f80] font-semibold text-xl bg-[#025] h-10 w-24 text-center pt-1 rounded-3xl shadow-xl tracking-tighter'>For You</h1>
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