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
  'contact/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      console.log('Выполняется запрос к API...');
      const response = await axios.post('/сontact', { name, phone });
      console.log('Ответ:', response.data);
      return response.data;
    } catch (e) {
      console.error('Ошибка:', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'сontact/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/сontact/${ContactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
