import { combineReducers, createStore } from "redux";
import { bankTransition } from "./reducers/bank-reducer";
import { counter } from "./reducers/count-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { cart } from "./reducers/cart-reducer";
import { AppState } from "../types";


const persistConfig = {
    key: 'root',
    storage,
  }
  

  //============ For Combine Dispatch ================
const rootReducer:any = combineReducers({
    bank:bankTransition,
    counter:counter,
    cart:cart,
})
const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer);
export const commonStore = createStore(persistedReducer);
export const persistor = persistStore(commonStore)
commonStore.dispatch({type:"deposit",payload:500})
commonStore.dispatch({type:"increment"})
console.log(commonStore.getState());















//============ For separate Dispatch ================
// const counterStore = createStore(counter);
// counterStore.dispatch({type:"increment"})
// console.log(counterStore.getState());