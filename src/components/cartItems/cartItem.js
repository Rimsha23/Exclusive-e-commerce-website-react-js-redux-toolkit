import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItemQuantity } from "../../redux/cart/cartSlice";
const CartItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      dispatch(updateCartItemQuantity({ productId: id, newQuantity }));
    }
  };
  const handleRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };
  const cart = useSelector((state) => state.cart.items)
  const calculateSubtotal = (item) => item.newPrice * item.quantity;
  return (
    <div className="cart-item flex items-center bg-white rounded-lg shadow-md p-2 mb-4">
      <table className="w-11/12 mx-auto table-auto">
        <thead className='mb-4 gap-8'>
          <tr >
            <th className="w-1/4 " style={{ textAlign: 'left', paddingBottom: '70px' }}>Product</th>
            <th className="w-1/4 " style={{ textAlign: 'left', paddingBottom: '70px' }}>Price</th>
            <th className="w-1/4 " style={{ textAlign: 'left', paddingBottom: '70px' }}>Quantity</th>
            <th className="w-1/4" style={{ textAlign: 'left', paddingBottom: '70px' }}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <td className="table-cell" style={{ textAlign: 'left', paddingBottom: '70px' }}>
                <div className="flex items-center">
                  <button
                    className={`text-red-500 hover:text-red-800 ${isHovered ? 'd-block' : 'hidden'}`}
                    onClick={() => handleRemoveItem(index)}
                  >
                    <span id='invisible-button'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" fill="#DB4444" />
                        <path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 "
                  />
                  <span className="ml-2">{item.title}</span>
                </div>
              </td>

              <td style={{ textAlign: 'left', paddingBottom: '70px' }}>${item.newPrice}</td>
              <td style={{ textAlign: 'left', paddingBottom: '70px' }}>
                <input
                  type="number"
                  value={item.quantity}
                  className='h-6 w-16'
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </td>
              <td style={{ textAlign: 'left', paddingBottom: '70px' }}>${calculateSubtotal(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;