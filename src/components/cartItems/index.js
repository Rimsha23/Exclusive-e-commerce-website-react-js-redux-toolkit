import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItemQuantity } from "../../redux/cart/cartSlice";
const CartItem = () => {
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
    <div className="cart-item font-poppins flex items-center bg-white rounded-lg shadow-md p-2 mb-4">
      <table className="w-11/12 mx-auto table-auto border-separate border-spacing-7">
        <thead className='mb-4 gap-8 pb-[60px] shadow-md'>
          <tr className="shadow-md h-[102px]" >
            <th className="w-1/4 " >Product</th>
            <th className="w-1/4 ">Price</th>
            <th className="w-1/4 " >Quantity</th>
            <th className="w-1/4">Subtotal</th>
          </tr>
        </thead>
        <tbody className="shadow-md">
          {cart.map((item, index) => (
            <tr className="shadow-md h-[80px]" key={item.id}
             
            >
              <td className="table-cell">
                <div className="flex relative items-center group ">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-[70px] h-[50px] "
                    />
                  <button
                    className={`text-red-500 hover:text-red-800 absolute left-0 top-0`}
                    onClick={() => handleRemoveItem(index)}
                  >
                    <span className='hidden group-hover:block' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" fill="#DB4444" />
                        <path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </button>
                 
                  <span className="ml-2">{item.title}</span>
                </div>
              </td>

              <td>${item.newPrice}</td>
              <td >
                <input
                  type="number"
                  value={item.quantity}
                  className='h-8 w-16 border-[2px] border-gray-500'
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </td>
              <td >${calculateSubtotal(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;