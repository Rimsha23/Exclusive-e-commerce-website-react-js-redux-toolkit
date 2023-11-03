import React,{useEffect} from 'react'
import products from '../../data/data.json'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import { addAllItemsToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
const Products=()=>{
  const dispatch=useDispatch();
  useEffect(() => {
    document.title= 'Exclusive/Products'
     }, []);
  const handleAddAllToCart=()=>{
    dispatch(addAllItemsToCart(products))
  }
return(
    <>
<Navbar/>
<div className='container'>
    <div className='flex flex-row mt-12 mb-16'>
        <h4 className='font-bold text-gray-600 text-[15px]'>Total Products ({products.length})</h4>
        <div className='flex ml-96'>
<Button onClick={handleAddAllToCart} className='ml-80' variant='white' >Move All To Cart</Button>
</div>
    </div>
<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10'>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
</div>
    </>
);
}
export default Products;