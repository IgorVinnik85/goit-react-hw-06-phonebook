import { createSlice } from '@reduxjs/toolkit';
import StaticContact from '../components/ContactsPhonebook/StaticContact';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    fillterContacts(state, action) {
      return action.payload;
    },
  },
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: StaticContact },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { fillterContacts } = filterSlice.actions;
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const filterToolKit = filterSlice.reducer;
export const contactsToolKit = contactsSlice.reducer;
