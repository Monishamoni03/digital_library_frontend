import { combineReducers } from "redux";
import bookReducers from "./bookReducer";
import userReducers from "./reducer";

const rootReducer = combineReducers({
    data: userReducers,
    bookData: bookReducers
})

export default rootReducer;