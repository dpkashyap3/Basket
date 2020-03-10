import grocery from "./GroceryReducer";
import addCartReducer from "./Cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
grocery,
addCartReducer
});

export default rootReducer;
