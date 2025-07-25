import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/products/productSlice';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const fav = useSelector((state) => state.products.products);
  const searchQuery = useSelector((state) => state.products.searchProduct);
  const dispatch = useDispatch();
  const location=useLocation();
  const isActive=(path)=>{
    return location.pathname === path;
  }
  const handleSearchByName = (e) => {
    dispatch(searchByName(e))
  }
  return (
    <div className='container font-poppins mt-2'>
      <nav className="bg-white py-3 px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row md:flex-row items-center justify-between border-b border-b-gray-300">
        <div className="flex items-center space-x-4">
          <div className='w-40'>
            <Link to={'/'} className=" text-black font-bold no-underline">
              <h1 className='text-2xl' >Exclusive</h1>
            </Link>
          </div>
          <ul className="flex flex-row mt-2 ml-32">
            <li>
              <Link to={'/'} className={`mr-5  font-normal text-black hover:text-[17px] ${isActive('/') ? 'underline underline-offset-4 text-[13px]' : 'no-underline text-[15px]'}`}>
                Home
              </Link>
            </li>
            <li><Link to={'/products'} className={`font-normal text-black hover:text-[17px] ${isActive('/products') ? 'underline underline-offset-4 text-[13px] ' : 'no-underline text-[15px]'}`}>Products</Link></li>
          </ul>
        </div>
        <div className="flex mt-0 items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="what are you looking for?"
              className="border p-2 pr-8 h-8 rounded w-60 bg-gray-50 placeholder:font-light"
              value={searchQuery}
              onChange={(e) => { handleSearchByName(e.target.value) }}
            />
            <div className="absolute right-2 top-1/2 text-[20px] transform -translate-y-1/2 text-black hover:text-gray-400">
              <FontAwesomeIcon className='text-black hover:text-gray-600 cursor-pointer' icon={faMagnifyingGlass} />
            </div>
          </div>
          <button className="text-black text-[21px] hover:text-gray-600 relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] rounded-full w-3 h-3 flex items-center justify-center">
              {fav.length}
            </span>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <Link to={'/cart'}>
            <button className="text-gray-600  relative">
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] rounded-full w-3 h-3 flex items-center justify-center">
                {cartItems.length}
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 16.6665H25.59C25.7056 16.6666 25.8177 16.6266 25.9072 16.5533C25.9966 16.48 26.0579 16.378 26.0806 16.2646L27.8806 7.26463C27.8951 7.19206 27.8934 7.11717 27.8755 7.04536C27.8575 6.97355 27.8239 6.90662 27.7769 6.8494C27.73 6.79218 27.6709 6.74609 27.604 6.71446C27.5371 6.68283 27.464 6.66645 27.39 6.6665H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
