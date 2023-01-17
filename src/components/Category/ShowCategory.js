import React from 'react';
import useCategory from '../../hooks/useCategory';
import Eachcategory from '../EachCategory/Eachcategory';

const ShowCategory = () => {
    const [category, setCategory] = useCategory();
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center'>
            {
                category.map(item=><Eachcategory key={item[0]}
                item={item}
                />)
            }
            </div>
        </div>
    );
};

export default ShowCategory;