import { BankState } from "../store/reducers/bank-reducer";
import { CartState } from "../store/reducers/cart-reducer";
import { CounterState } from "../store/reducers/count-reducer";


export interface AppState {
  bank: BankState;
  counter: CounterState;
  cart: CartState;
}