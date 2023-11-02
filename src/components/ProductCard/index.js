import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';

const ProductCard = ({ product }) => {
  const { title, image, newPrice, discountInPercentage } = product;

  return (
    <div className="max-w-xs rounded shadow-md m-4 w-60 h-80 ">
      <div className="relative">
        <img className="w-full h-52" src={image} alt={title} />
        <div className="absolute w-10 h-5 top-0 left-0 bg-red-600 text-white text-center text-[10px] rounded-md p-1">
          -{discountInPercentage}% 
        </div>
        <div className="absolute top-0 right-0 m-2">
          <button className="text-black hover:text-gray-600">
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </button>
        </div>
      </div>
      <div className="flex mt-2 mb-2">
        <Button variant='black' size='full'>Add To Cart</Button>
        </div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
      
      <div className="px-1 pb-3 flex flex-row">
        <div className="text-red-600 text-[13px] font-medium">
          ${newPrice}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
