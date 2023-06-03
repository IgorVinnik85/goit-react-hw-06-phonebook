import { FindContacts } from './FindContacts/FindContacts';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsPhonebook } from './ContactsPhonebook/ContactsPhonebook';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { fillterContacts, addContacts, deleteContacts } from '../redux/slice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.find(element => element.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    dispatch(
      addContacts({
        name: name,
        number: number,
        id: nanoid(),
      })
    );
  };

  const findName = event => {
    dispatch(fillterContacts(event.target.value));
  };

  const filteredName = () => {
   
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const filteredArray = filteredName();

  return (
    <div
      style={{
        display: 'inline-flex',
        padding: 20,
        flexDirection: 'column',
        border: '2px solid black',
      }}
    >
      <h1>Phonebook</h1>
      <FormPhonebook onSubmit={formSubmitHandler} />
      <FindContacts onInput={findName} />
      <h2>Contacts</h2>
      <ContactsPhonebook data={filteredArray} deleteContact={deleteContact} />
    </div>
  );
};
