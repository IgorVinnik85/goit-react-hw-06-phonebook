import { configureStore } from '@reduxjs/toolkit';
import { filterToolKit, contactsToolKit } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsToolKit,
    filter: filterToolKit,
  },
});
