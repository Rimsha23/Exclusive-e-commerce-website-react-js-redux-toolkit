import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { addItemToCart } from '../../redux/cart/cartSlice';
import { addToFavourites } from '../../redux/products/productSlice';
import { useDispatch } from 'react-redux';
const ProductCard = ({ product }) => {
  const { title, image, newPrice, discountInPercentage } = product;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  }
  const handleAddToFav = () => {
    dispatch(addToFavourites(product))
  }
  return (
    <div className="max-w-xs rounded  m-4 w-60 h-80 font-poppins ">
      <div className="relative bg-gray-200">
        <img className="w-full h-52" src={image} alt={title} />
        <div className="absolute w-12 h-5 top-0 left-0 bg-red-600 text-white text-center text-[10px] rounded-md p-1">
          -{discountInPercentage}%
        </div>
        <div className="absolute top-0 right-0 m-2">
          <button onClick={handleAddToFav} className="text-black hover:text-gray-600">
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </button>
        </div>
      </div>
      <div className="flex mt-2 mb-2">
        <Button className='flex items-center justify-center ' variant='black' size='full' onClick={handleAddToCart}>
          <span className='text-white text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.75 3.75H5.75L8 16.5H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          Add To Cart</Button>
      </div>
      <h3 className="font-medium pl-2 text-gray-900 text-[17px] mb-1">{title}</h3>
        <p className=" pl-2 text-red-600 text-[13px] font-medium">
          ${newPrice}
      </p>
    </div>
  );
};

export default ProductCard;
