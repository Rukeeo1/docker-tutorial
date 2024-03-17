import React from 'react';
import { productImages } from '../../utils/dummy-data';
import { Svgs } from '../../assets/svgs';

export const ProductCard = ({
  title,
  numberOfColor,
  img: productImg,
  itemFlag,
}) => {
  return (
    <div className='product__item-container'>
      <div className='product__image-wrapper'>
        <a href='/' className='product__image-link'>
          <div className='product__image-content'>
            <img
              className='product__image'
              src={productImages[productImg]}
              alt=''
            />

            <div className='product__image-pointer'></div>
          </div>
        </a>
      </div>

      <div className='product__title-container'>
        <div className='product__title-content'>
          <div className='product__main-title'>
            <a className='product__main-title-link'>{title}</a>
          </div>

          <button className='product__btn-eye-container btn--small btn--icon'>
            {<Svgs.Eye className='product__eye' />}
          </button>
        </div>

        <span class='product__number-of-color-tile flex'>
          + {numberOfColor} colours
        </span>

        <div class='product__title-flags'>
          <div class='product__item-flag item-flag'>{itemFlag}</div>
        </div>
      </div>
    </div>
  );
};
