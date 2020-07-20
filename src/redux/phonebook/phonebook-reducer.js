import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const hasName = state.some(
      (contact) => contact.name === payload.name.trim()
    );

    if (hasName) {
      alert(`${payload.name.trim()} is already in contacts`);
      return;
    }

    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
