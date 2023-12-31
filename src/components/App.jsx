import { useEffect, useMemo, useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { UserContext } from 'components/userContent';

const init = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState(null);

  const [filter, setFilter] = useState('');

  const createUser = data => {
    const isUser = contacts.find(contact => contact.name === data.name);
    if (isUser) {
      alert(`${isUser.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, data]);
  };
  const handleChange = e => {
    setFilter(e.target.value);
  };
  const filtered = useMemo(() => {
    return (
      contacts &&
      contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter);
      })
    );
  }, [contacts, filter]);
  const handleDelete = id => {
    const deleted = contacts.filter(contact => contact.id !== id);
    setContacts(deleted);
  };
  useEffect(() => {
    setContacts(
      JSON.parse(localStorage.getItem('users')) &&
        JSON.parse(localStorage.getItem('users')).length
        ? JSON.parse(localStorage.getItem('users'))
        : init
    );
  }, []);
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addUser={createUser} />
      <h2>Contacts</h2>
      <Filter value={filter} change={handleChange} />
      <UserContext.Provider value={{ handleDelete }}>
        <ContactList users={filtered} />
      </UserContext.Provider>
    </div>
  );
};
