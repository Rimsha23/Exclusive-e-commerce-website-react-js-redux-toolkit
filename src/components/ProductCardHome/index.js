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
    <div className="max-w-xs rounded  m-4 w-60 h-76  font-poppins">
      <div className="relative  h-48 bg-gray-200 ">
        <img className="w-full h-44" src={image} alt={title} />
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
      <div className="">
        <h3 className="font-medium pl-1 text-[17px] text-gray-900 pt-2">{title}</h3>
      </div>
      <div className="px-1 pb-3 flex flex-row">
        <p className="text-red-600 pl-1 text-[13px] font-medium">
          ${newPrice}
        </p>
        <p className="text-gray-500 pl-1 text-[13px] ml-2 line-through font-medium">
          ${oldPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCardHome;
