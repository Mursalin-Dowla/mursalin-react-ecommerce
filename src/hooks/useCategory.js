import { useEffect, useState } from 'react';

const useCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setCategory(data))
    },[])
    return [category, setCategory]
};

export default useCategory;