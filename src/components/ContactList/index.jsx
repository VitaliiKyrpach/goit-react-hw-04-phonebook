import { ContactListItem } from 'components/ContactListItem';
export const ContactList = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, user, phone }) => {
        return <ContactListItem key={id} id={id} user={user} phone={phone} />;
      })}
    </ul>
  );
};
