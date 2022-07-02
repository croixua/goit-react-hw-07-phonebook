import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions.js';
import * as selectors from 'redux/phonebook/phonebook-selectors';
import {
  fetchContacts,
  postContact,
  deleteContact,
} from 'redux/phonebook/phonebook-operation';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const visibleContacts = useSelector(selectors.getVisibleContacts);
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

    dispatch(postContact({ name, number }));
  };

  const onDelete = id => {
    dispatch(deleteContact(id));
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
      {contacts.length > 0 ? (
        <ContactList contacts={visibleContacts} onDelete={onDelete} />
      ) : (
        <h1>not found contacs</h1>
      )}
    </Container>
  );
}
