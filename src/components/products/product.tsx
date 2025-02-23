import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  quantity: number;
}

export interface RootState {
  cart: {
    cartItems: ProductType[];
  };
}

const Product = () => {
  // ========== Redux Method ==========
  const dispatch = useDispatch();
  const reduxData = useSelector((state: RootState) => state);
  const cartItems = reduxData.cart.cartItems;
  console.log(cartItems);

  const addToCart = (item: ProductType) => {
    dispatch({ type: "addCartItem", payload: item });
  };

  // ============= Api Fetch Method ==============
  const [products, setProducts] = useState<ProductType[]>([]);

  const apiData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products"); // Correct endpoint
      const data = await response.json();
      setProducts(data.products); // Access the `products` array in the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 mt-28">
      {products.length > 0 &&
        products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 flex flex-col justify-center items-center space-y-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="bg-[#f0ece6] w-full flex justify-center items-center p-4 rounded-lg">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="w-full text-center">
              <h1 className="font-semibold text-lg truncate" title={item.title}>
                {item.title.slice(0, 15)}
              </h1>
              <p className="text-gray-600">Price: ${item.price}</p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart({ ...item, quantity: 1 })}
              className="bg-[#8d77fa] text-white px-4 py-2 rounded-lg hover:bg-[#7b68ee] transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Product;
