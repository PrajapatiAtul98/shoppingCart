import {combineReducers} from "redux";
import { cartreducer } from "./reducer";
import { loginReducer } from "./reducer";

const rootred = combineReducers({
    cartreducer,
    loginReducer,
});


export default rootred