import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addUser }) => {
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem('name')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(localStorage.getItem('number')) ?? ''
  );

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);
  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(number));
  }, [number]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addUser({ id: nanoid(), user: name, phone: number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
