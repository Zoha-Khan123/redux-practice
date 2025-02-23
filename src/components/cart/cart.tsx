import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../products/product";

const Cart = () => {
  // ========== Redux Method ==========
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const cartItems = cart.cartItems;
  console.log(cartItems);

  //======== Add item from cart ==========
  const addToCart = (id: number) => {
    dispatch({ type: "addCartItem", payload: { id } });
  };

  //======== Remove item from cart ==========
  const removeFromCart = (id: number) => {
    dispatch({ type: "removeCartItem", payload: { id } });
  };

  //======== Delete item from cart ==========
  const deleteFromCart = (id: number) => {
    dispatch({ type: "deleteCartItem", payload: { id } });
  };

  //======== Total Amount of cart ==========
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="">
      {/* Header */}
      <div className="bg-[#8d77fa] text-white p-16 mb-10 flex items-center text-2xl font-bold">
        <h1>Shopping Cart</h1>
      </div>

      {/* Cart Content */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <div className="hidden sm:flex justify-between items-center gap-4 mb-6 text-base font-semibold">
          <h1 className="flex-1">Product</h1>
          <h1 className="w-20 text-center">Price</h1>
          <h1 className="w-20 text-center">Quantity</h1>
          <h1 className="w-20 text-center">Total</h1>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center h-80">
            <p className="text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 border rounded-lg shadow-sm"
              >
                {/* Product */}
                <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 bg-[#f1d0cd] rounded-lg object-contain"
                  />
                  <div className="text-center sm:text-left">
                    <h1
                      className="text-sm font-semibold truncate"
                      title={item.title}
                    >
                      {item.title.slice(0, 15)}
                    </h1>
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className="text-sm text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="w-20 text-center">
                  <p className="text-sm font-semibold">${item.price}</p>
                </div>

                {/* Quantity */}
                <div className="w-20 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-20 text-center">
                  <p className="text-sm font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            {/* Total Amount and Checkout Button */}
            {cartItems.length > 0 && (
              <div className="mt-8 p-6 font-bold border rounded-lg shadow-sm ">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Total Amount:</h2>
                  <p className="text-xl font-semibold">
                    ${totalAmount.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => alert("Proceeding to checkout...")} // Add your checkout logic here
                  className="w-full mt-6 bg-[#8d77fa] text-white py-3 rounded-lg hover:bg-[#7b68ee] transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
