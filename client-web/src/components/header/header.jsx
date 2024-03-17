import React from 'react';
import bannerImage from '../../assets/banner.jpg'

export const Header = () => {
  return (
    <div
      className='homepage__banner'
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* billboard banner content */}
      <div className='homepage__billboard-banner-content d-flex align-items-center'>
        <div className='homepage__billboard-header-container'>
          <h2 class='homepage__banner-header'>Lacoste x Roland-Garros</h2>

          <div class='homepage__banner-title'>Game, set and style</div>
        </div>

        <a class='homepage__category-button-him' data-type='category'>
          <span>For him</span>
        </a>

        <a class='homepage__category-button-her' data-type='category'>
          <span>For her</span>
        </a>
      </div>
    </div>
  );
};

