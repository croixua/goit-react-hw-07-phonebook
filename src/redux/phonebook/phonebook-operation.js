import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.fetchContacts();

      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const postContact = createAsyncThunk(
  'contacts/postContacts',
  async (state, { rejectWithValue }) => {
    try {
      const contact = await API.postContact(state);

      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (state, { rejectWithValue }) => {
    try {
      const contact = await API.deleteContact(state);

      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
