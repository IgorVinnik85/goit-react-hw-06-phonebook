import StaticContact from 'components/ContactsPhonebook/StaticContact';

const storedContacts = JSON.parse(localStorage.getItem('contacts'));

export const intlState = {
  filterCts: { filter: '' },
  phoneCts: { contacts: storedContacts ? storedContacts : StaticContact },
};
