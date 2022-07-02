import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  contactAdd,
  contactDelete,
  changeFilter,
} from 'redux/phonebook/phonebook-actions.js';
import {
  getContacts,
  getFilter,
  getVisibleContacts,
} from 'redux/phonebook/phonebook-selectors';
import { fetchContacts } from 'redux/phonebook/phonebook-operation';
import * as API from 'services/API';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const checkDuplicateName = name =>
    contacts.find(contact => contact.name === name);

  const formSubmitHandler = async (name, number) => {
    if (checkDuplicateName(name))
      return alert(
        'This contact already exists, please enter a different name',
      );

    const contact = await API.postContact({ name, number });

    dispatch(contactAdd(contact));
  };

  const onDelete = id => {
    API.deleteContact(id);

    const filtredContacts = contacts.filter(contact => contact.id !== id);

    dispatch(contactDelete(filtredContacts));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter
        handlerFilter={e => dispatch(changeFilter(e.currentTarget.value))}
        filter={filter}
      />
      <ContactList contacts={visibleContacts} onDelete={onDelete} />
    </Container>
  );
}
