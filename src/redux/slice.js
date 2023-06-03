import { createSlice } from '@reduxjs/toolkit';
import StaticContact from '../components/ContactsPhonebook/StaticContact';
const storedContacts = JSON.parse(localStorage.getItem('contacts'));

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
  initialState: storedContacts ? storedContacts : StaticContact,
  reducers: {
    addContacts(state, action) {
      return [...state, action.payload];
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { fillterContacts } = filterSlice.actions;
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const filterToolKit = filterSlice.reducer;
export const contactsToolKit = contactsSlice.reducer;
