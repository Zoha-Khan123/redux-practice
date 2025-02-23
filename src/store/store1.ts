import { combineReducers, createStore } from "redux";
import { bankTransition } from "./reducers/bank-reducer";
import { counter } from "./reducers/count-reducer";


const rootReducer = combineReducers({
    bank:bankTransition,
    counter:counter,
})
const commonStore = createStore(rootReducer);
commonStore.dispatch({type:"deposit",payload:500})
commonStore.dispatch({type:"increment"})
console.log(commonStore.getState());


