import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import peopleReducer from "./peopleReducer";


const rootReducer = combineReducers({
    
    session: sessionReducer,
    people: peopleReducer
});

export default rootReducer;
