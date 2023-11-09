import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { removeAllItemsFromCart } from '../../redux/cart/cartSlice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Navbar from '../../components/Navbar';
import CartItem from '../../components/cartItems';
const CartPage = () => {
  useEffect(() => {
    document.title = 'Exclusive/Cart'
  }, []);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.newPrice, 0);
  };


  const handleRemoveAll = () => {
    dispatch(removeAllItemsFromCart())
  }
  const handleDownloadPDF = () => {
    const contentToCapture = document.getElementById('receipt');
    const invisibleButton = document.getElementById('rmv-btn');
    invisibleButton.style.display = 'none';
    const pdf = new jsPDF();
    html2canvas(contentToCapture,).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      pdf.addImage(imageData, 'PNG', 10, 10, 190, 0);
      pdf.save('receipt.pdf');
      invisibleButton.style.display = 'block';

    });
  }
  return (
    <div className="container mx-auto font-poppins ">
      <Navbar />

      <div className='mt-20 mb-6'>
        <h2 className="text-[16px] font-semibold mb-4 text-gray-900">Cart <span className='text-gray-500'>/Home</span></h2>
      </div>
      <div id='cart-page'>

        <CartItem />
        <div className='flex lg:flex-row flex-row sm:flex-col mt-16'>
          <div>
            <Link to={'/products'}>
              <Button  variant='white' >Return to Products</Button>
            </Link>
          </div>
          <div className='lg:ml-96 sm:mt-4 md:mt-0 lg:mt-0 '>
            <Button  className='lg:ml-28 ml-3' variant='white' onClick={handleRemoveAll}>Remove All</Button>

          </div>
        </div>
        <div className="mt-8 flex flex-col border border border-black w-96 h-80 items mb-5" id='receipt'>
          <h3 className="text-lg font-bold ml-8 mt-3 mb-3">Cart Total</h3>
          <div className=' border-b border-b-gray-300 ml-6 h-10 mr-3'>
            <p className="table-cell mb-2 ">Subtotal: <span className='ml-52'>${calculateTotalPrice()}</span></p>
          </div>
          <div className=' border-b border-b-gray-300 ml-6 mt-2 h-10 mr-3'>
            <p className="table-cell ">Shipping: <span className='ml-52'> Free </span></p>
          </div>
          <div className=' border-b border-b-gray-300 ml-6 mt-2 mr-3 h-10'>
            <p className="table-cell ">Total: <span className='ml-56'> ${calculateTotalPrice()}</span></p>
          </div>
          <div className='flex align-center justify-center mt-12 items-center'>

            <Button variant='red' id="rmv-btn" onClick={handleDownloadPDF}>Download Receipt</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
