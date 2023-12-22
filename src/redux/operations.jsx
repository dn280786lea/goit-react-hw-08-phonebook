import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'Contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/сontact');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'Contact/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/сontact', { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'Contact/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/сontact/${ContactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
