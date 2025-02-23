import { FaShoppingCart } from "react-icons/fa"; // Shopping cart icon import karein
import { useSelector } from "react-redux";
import { RootState } from "../products/product";
import { Link } from "react-router-dom";

const Header = () => {
  // ========== Redux Method==========
  const reduxData = useSelector((state: RootState) => state);
  const cartItems = reduxData.cart.cartItems;
  console.log(cartItems);
  return (
    <header className="bg-[#8d77fa] text-white p-6 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">My E-Commerce Store</h1>
        <div className="relative">
        <Link to="/cart"> <FaShoppingCart className="text-2xl cursor-pointer" /> </Link>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            {cartItems.length}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
