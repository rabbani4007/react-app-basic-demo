import { INCREMENT, DECREMENT, IAction } from "../actions/index";

export const defaultState = {
  count: 0,
};

const changeNumber = (state = defaultState, action: IAction) => {
  debugger;
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload.amount,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload.amount,
      };
    default:
      return state;
  }
};

export default changeNumber;
