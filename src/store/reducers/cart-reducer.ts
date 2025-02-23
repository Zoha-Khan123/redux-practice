//============= Types ================
interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

interface AddToCartAction {
  type: "addCartItem";
  payload: CartItem;
  [key: string]: any;
}

interface RemoveCartItemAction {
  type: "removeCartItem";
  payload: { id: number };
  [key: string]: any;
}

interface DeleteCartItemAction {
  type: "deleteCartItem";
  payload: { id: number };
  [key: string]: any;
}
type CartAction = AddToCartAction | RemoveCartItemAction | DeleteCartItemAction;

// ================= Cart ================
const intialItems: CartState = {
  cartItems: [],
};

export const cart = (
  state: CartState = intialItems,
  actions: CartAction
): CartState => {
  const { type, payload } = actions;

  // =========== Add to Cart ============
  if (type === "addCartItem") {
    let productExit = false;
    const updatedItems = state.cartItems.map((product: CartItem) => {
      if (product.id === payload.id) {
        productExit = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    if (!productExit) {
      updatedItems.push({ ...payload, quantity: 1 });
    }

    return { ...state, cartItems: updatedItems };

    // =========== Remove From Cart ============
  } else if (type === "removeCartItem") {
    const updatedItems = state.cartItems.map((product: CartItem) => {
      if (product.id === payload.id) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
      }
      return product;
    });
    return { ...state, cartItems: updatedItems };
  } else if (type === "deleteCartItem") {
    const updatedItems = state.cartItems.filter(
      (product: CartItem) => product.id !== payload.id
    );
    return { ...state, cartItems: updatedItems };
  }
  return state;
};
