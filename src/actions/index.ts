// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export type ActionTypes = typeof INCREMENT | typeof DECREMENT;

export interface IPayload {
  amount: number;
}

export interface IAction {
  type: ActionTypes;
  payload: IPayload;
}

// Action Creators
export function increment(amount: number): IAction {
  return {
    type: INCREMENT,
    payload: {
      amount,
    },
  };
}

export function decrement(amount: number): IAction {
  return {
    type: DECREMENT,
    payload: {
      amount,
    },
  };
}
