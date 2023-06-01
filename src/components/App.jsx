import { useEffect } from 'react';
import { FindContacts } from './FindContacts/FindContacts';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsPhonebook } from './ContactsPhonebook/ContactsPhonebook';
// import StaticContact from '../components/ContactsPhonebook/StaticContact.json';
import { nanoid } from 'nanoid';
import './store/store';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   return storedContacts ? storedContacts : StaticContact;
  // });
  // const [filter, setFilter] = useState('');
  const { filter } = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  console.log(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.find(element => element.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    const objData = {
      name: name,
      number: number,
      id: nanoid(),
    };

    // setContacts([objData, ...contacts]);
    dispatch({ type: 'contacts', payload: [objData, ...contacts] });
  };

  const findName = event => {
    // setFilter(event.target.value);
    dispatch({ type: 'filter', payload: event.target.value });
  };

  const filteredName = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
    dispatch({
      type: 'contacts',
      payload: contacts.filter(contact => contact.id !== contactId),
    });
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
