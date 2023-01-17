import React from 'react';
import useProducts from '../../hooks/useProducts';
import ShowProduct from '../ShowProduct/ShowProduct';

const Home = () => {
    const [products, setProducts] = useProducts();
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
           <div className='col-span-1'>
              <h1>suggestions</h1>
           </div>
        </div>
    );
};

export default Home;