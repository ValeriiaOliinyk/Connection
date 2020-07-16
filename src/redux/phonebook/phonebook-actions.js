import types from "./phonebook-types";
import shortId from "shortid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filter = (value) => ({
  type: types.CHANGE,
  payload: value,
});

export default { addContact, deleteContact, filter };
