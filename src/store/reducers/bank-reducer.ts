
// ================= Bank Account ================
interface Action {
    type: string;
    payload?: number;
    [key: string]: any;
  }
  
  export interface BankState {
    amount: number;
  }
  const initialState: BankState = { amount: 0 };
 export const bankTransition = (
    state: BankState = initialState,
    actions: Action
  ): BankState => {
    const { type, payload } = actions;
  
    if (type === "deposit") {
      return { amount: state.amount + (payload ?? 0) };
    } else if (type === "withdraw") {
      return { amount: state.amount - (payload ?? 0) };
    }
    return state;
  };
  