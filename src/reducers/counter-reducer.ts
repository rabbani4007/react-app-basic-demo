import { CounterState, CounterAction } from "../actions/counter-action";

const initialState = {
  count: 0,
};

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
