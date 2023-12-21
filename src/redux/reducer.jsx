import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contacts';
import { authReducer } from './auth/slice';

export const reducer = {
  auth: authReducer,
  contacts: contactsReducer,
  filter: filtersReducer,
};
