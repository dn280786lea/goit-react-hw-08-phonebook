import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contacts';
import { authReducer } from '../auth/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filtersReducer,
};
