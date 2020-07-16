import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./phonebook/phonebook-reducer";

const rootReducers = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
