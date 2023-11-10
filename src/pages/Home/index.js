import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAllProducts } from '../../redux/products/productSlice';
import products from '../../data/product.json';
import ProductCardHome from '../../components/ProductCardHome';
import Header from '../../components/Navbar';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  const viewAllProducts = useSelector((state) => state.products.viewAllProducts);
  const dispatch = useDispatch();
  const [isScrolled,setIsScrolled]= useState(false);
  useEffect(() => {
    document.title = 'Exclusive/Home'
  }, []);
  const handleShowAllProducts = () => {
    dispatch(showAllProducts())
    console.log(viewAllProducts)
  }
  const filteredProducts = viewAllProducts ? products : products.slice(0, 4);
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setIsScrolled(true)
  } else {
    setIsScrolled(false)
  
  }
}

const scrollBackToTop=()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop = 0
}
  return (
    <>
      <Header />
      <Banner />
      <div className='container'>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10'>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCardHome product={product} />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <Button className='mb-5' onClick={handleShowAllProducts}>
            {viewAllProducts ? 'View Fewer Products' : 'View All Products'}
          </Button>
        </div>
<Button id='scrollBtn' variant='black' size='square' className={`fixed bottom-6 right-4 ${isScrolled? 'd-block':'hidden'}`} onClick={scrollBackToTop}>
  <span><FontAwesomeIcon icon={faArrowUp} className='text-white'></FontAwesomeIcon></span>
  </Button>
      </div>
    </>
  );


};

export default Home;
