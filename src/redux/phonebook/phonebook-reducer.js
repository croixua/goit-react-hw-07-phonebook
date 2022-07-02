import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import {
  fetchContacts,
  postContact,
  deleteContact,
} from './phonebook-operation';

const filtredContacts = (state, payload) =>
  state.filter(({ id }) => {
    return id !== payload.id;
  });

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => [...state, ...payload],
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    filtredContacts(state, payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
