import React, { useState,useEffect } from 'react'
import products from '../../data/product.json'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addAllItemsToCart } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const Products = () => {
  const dispatch = useDispatch();
  const searchedProducts = useSelector((state) => state.products.searchProduct)
  const [isScrolled,setIsScrolled]= useState(false);
  useEffect(() => {
    document.title = 'Exclusive/Products'
  }, []);
  const handleAddAllToCart = () => {
    dispatch(addAllItemsToCart(products))
  }
  const searchProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchedProducts.toLowerCase())
  );
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    
    }
  }
  
  const scrollBackToTop=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }
  return (
    <>
      <Navbar />
      <div className='container font-poppins'>
        <div className='flex flex-row  mt-12 mb-16'>
          <h4 className='font-bold text-gray-600 text-[15px]'>Total Products ({products.length})</h4>
          <div className='flex md:ml-8 sm:ml-8 lg:ml-96'>
            <Button onClick={handleAddAllToCart} className='lg:ml-80 md:ml-8 sm:ml-10' variant='white' >Move All To Cart</Button>
          </div>
        </div>
        {searchProducts.length > 0 ? (
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10'>
            {searchProducts.map((sproduct) => (
              <ProductCard product={sproduct} />
            ))}
          </div>

        ) : (
          <>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10'>
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
        <Button id='scrollBtn' variant='black' size='square' className={`fixed bottom-6 right-4 ${isScrolled? 'd-block':'hidden'}`} onClick={scrollBackToTop}>
  <span><FontAwesomeIcon icon={faArrowUp} className='text-white'></FontAwesomeIcon></span>
  </Button>
      </div>

    </>
  );
}
export default Products;