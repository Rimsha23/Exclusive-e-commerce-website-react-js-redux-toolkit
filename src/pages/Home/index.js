import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAllProducts } from '../../redux/products/productSlice';
import products from '../../data/data.json';
import ProductCardHome from '../../components/ProductCardHome';
import Header from '../../components/Navbar';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
const Home = () => {
  const viewAllProducts = useSelector((state) => state.products.viewAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Exclusive/Home'
  }, []);
  const handleShowAllProducts = () => {
    dispatch(showAllProducts())
    console.log(viewAllProducts)
  }
  const filteredProducts = viewAllProducts ? products : products.slice(0, 4);

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

      </div>
    </>
  );


};

export default Home;
