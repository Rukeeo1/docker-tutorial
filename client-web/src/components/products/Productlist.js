import React from 'react';
import { useQuery } from 'react-query';
import { ProductCard } from '../product-card';

import './Productlist.css';

export const Productlist = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery('myData', async () => {
    const response = await fetch('http://localhost:3000/products'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  return (
    <div className='product'>
      <div className='product__header-container'>
        <h2 className='product__header-title'>
          Lacoste Seasonal Wardrobe&nbsp;
        </h2>
      </div>

      {/* productlist */}

      <div className='product__list-container'>
        <div className='product__slider-list'>
          {products?.map((product, index) => (
            <ProductCard
              img={product.img}
              title={product.title}
              numberOfColor={product.numberOfColor}
              itemFlag={product.itemFlag}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productlist;
