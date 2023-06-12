import { createStore } from "redux";

import { noteReducer } from "./reducers/note-reducer";
import { counterReducer } from "./reducers/counter-reducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  note: noteReducer,
  counter: counterReducer,
});

const store = createStore(noteReducer);
//console.log(store.getState());
export default store;
