import React from 'react'
import products from '../../data/data.json'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
const Products=()=>{
return(
    <>
<Navbar/>
<div className='container'>
    <div className='flex flex-row mt-12 mb-16'>
        <h4 className='font-bold text-gray-600 text-[15px]'>Total Products ({products.length})</h4>
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