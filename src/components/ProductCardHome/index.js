import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addToFavourites } from '../../redux/products/productSlice';

const ProductCardHome = ({ product }) => {
  const { title, image, newPrice, oldPrice, discountInPercentage } = product;
  const dispatch = useDispatch();

  const handleAddToFav = () => {
    dispatch(addToFavourites(product));
  }

  return (
    <div className="max-w-xs rounded shadow-md m-4 w-60 h-76">
      <div className="relative">
        <img className="w-full h-52" src={image} alt={title} />
        <div className="absolute w-10 h-5 top-0 left-0 bg-red-600 text-white text-center text-[10px] rounded-md p-1">
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
      <div className="">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
      </div>
      <div className="px-1 pb-3 flex flex-row">
        <div className="text-red-600 text-[13px] font-medium">
          ${newPrice}
        </div>
        <div className="text-gray-500 text-[13px] ml-2 line-through font-medium">
          ${oldPrice} 
        </div>
      </div>
    </div>
  );
};

export default ProductCardHome;
