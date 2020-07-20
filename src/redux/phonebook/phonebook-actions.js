import { createAction } from "@reduxjs/toolkit";
import shortId from "shortid";

const addContact = createAction("phonebook/add", (name, number) => ({
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction("phonebook/delete");
const filter = createAction("phonebook/change");

export default { addContact, deleteContact, filter };
