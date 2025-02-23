import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export interface RootState {
  cart: {
    cartItems: ProductType[];
  };
}
const Product = () => {
  // ========== Redux Method==========
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
      const response = await fetch("https://fakestoreapi.com/products");
      const data: ProductType[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-contain p-4"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
            <p className="text-lg text-green-600 font-bold mb-2">
              ${item.price}
            </p>
            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
            <p className="text-sm text-gray-700">{item.description}</p>
            <button onClick={() => addToCart({ ...item, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
