import { ContactListItem } from 'components/ContactListItem';
export const ContactList = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} user={name} phone={number} />;
      })}
    </ul>
  );
};
