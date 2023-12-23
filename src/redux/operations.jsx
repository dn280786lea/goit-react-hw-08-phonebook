import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      console.log('Выполняется запрос к API...');
      const response = await axios.post('/contact', { name, number });
      console.log('Answer:', response.data);
      return response.data;
    } catch (e) {
      console.error('Error:', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/сontact/${ContactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
