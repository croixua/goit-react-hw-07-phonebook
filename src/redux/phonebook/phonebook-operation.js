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
