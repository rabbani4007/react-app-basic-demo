import changeNumber from "./upDown";

import { combineReducers } from "redux";
import { noteReducer } from "./note-reducer";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({ noteReducer, counterReducer });

export default rootReducer;
