import { createStore, combineReducers } from "redux";
import DefaultReducer from "./reducers/defaultReducer";
const Reducers = combineReducers({
	DefaultReducer
});

const Store = createStore(Reducers);

export default Store;