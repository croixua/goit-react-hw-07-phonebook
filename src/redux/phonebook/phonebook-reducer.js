import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter, contactAdd, contactDelete } from './phonebook-actions';
import { fetchContacts } from './phonebook-operation';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => [...state, ...payload],
  [contactAdd]: (state, { payload }) => [...state, payload],
  [contactDelete]: (_, { payload }) => [...payload],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
