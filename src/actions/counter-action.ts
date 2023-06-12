export interface CounterState {
  count: number;
}

export type CounterAction = { type: string };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = (): CounterAction => {
  return { type: INCREMENT };
};

export const decrement = (): CounterAction => {
  return { type: DECREMENT };
};
