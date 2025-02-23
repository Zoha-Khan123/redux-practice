import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../products/product";

const Cart = () => {
  // ========== Redux Method ==========
  const dispatch = useDispatch();
  const reduxData = useSelector((state: RootState) => state);
  const cartItems = reduxData.cart.cartItems;
  console.log(cartItems);

   // Add item from cart
   const addToCart = (id: number) => {
    dispatch({ type: 'addCartItem', payload: { id } });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    dispatch({ type: 'removeCartItem', payload: { id } });
  };

  // Delete item from cart
  const deleteFromCart = (id: number) => {
    dispatch({ type: 'deleteCartItem', payload: { id } });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item,index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-lg text-green-600 font-bold">${item.price}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div>
                <p><button onClick={() => removeFromCart(item.id)}>-</button>{item.quantity}<button onClick={() => addToCart(item.id)}>+</button></p>
              </div>
              <button  onClick={() => deleteFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">Total Amount: </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

