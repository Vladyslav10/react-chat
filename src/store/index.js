import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
    contactsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());