// ================= Counter ================
export interface CounterState {
    count: number;
  }
  interface counterAction {
    type: string;
    [key: string]: any;
  }
  const counterInitialState: CounterState = {
    count: 0,
  };
export  const counter = ( state: CounterState = counterInitialState,action: counterAction):CounterState=> {
    const { type } = action;
    if (type === "increment") {
        return { count: state.count + 1 };
      }
      if (type === "decrement") {
          return { count: state.count - 1 };
      }
      return state;
  };
  