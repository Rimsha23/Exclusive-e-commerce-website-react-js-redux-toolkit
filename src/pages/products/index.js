import React,{useEffect} from 'react'
import products from '../../data/data.json'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import { addAllItemsToCart } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const Products=()=>{
  const dispatch=useDispatch();
  const searchedProducts= useSelector((state)=>state.products.searchProduct)
  useEffect(() => {
    document.title= 'Exclusive/Products'
     }, []);
  const handleAddAllToCart=()=>{
    dispatch(addAllItemsToCart(products))
  }
  const searchProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchedProducts.toLowerCase())
  );
  
return(
    <>
<Navbar/>
<div className='container'>
    <div className='flex flex-row mt-12 mb-16'>
        <h4 className='font-bold text-gray-600 text-[15px]'>Total Products ({products.length})</h4>
        <div className='flex md:ml-40 sm:ml-40 lg:ml-96'>
<Button onClick={handleAddAllToCart} className='lg:ml-80 md:ml- sm:ml-20' variant='white' >Move All To Cart</Button>
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
</div>

    </>
);
}
export default Products;