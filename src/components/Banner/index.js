import React from 'react';
import image1 from '../../images/apple.png';
import image2 from '../../images/banner.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  return (
    <div className=' w-10/12 mr-32 bg-black text-white ' style={{ margin: '40px 135px 140px 135px' }}>
      <div className='flex'>
        <div className='w-1/3 relative'>
          <div className='flex space-x-5 absolute ml-8 mt-8'>
            <img className='w-10 h-12' src={image1} alt='iPhone' />
            <p className='text-white text-lg font-normal pt-2'>iPhone 14 Series</p>
          </div>
          <div className='absolute ml-8 mt-28'>
            <p className='text-5xl font-bold leading-14'>Up to 10% off Voucher</p>
          </div>
          <div className='absolute ml-8 mt-64'>
            <button className='hover:underline'>
              Shop Now <span ><FontAwesomeIcon icon={faArrowRight} /></span>
            </button>
          </div>
        </div>
        <div className='w-4/5 h-80 '>
          <img className='h-72 lg:w-3/5 md:w-3/6 sm:3/6  md:ml-12 sm:ml-16 lg:ml-8 ' src={image2} alt='Banner' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
