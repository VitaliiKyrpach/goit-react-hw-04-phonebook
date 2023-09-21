import { useUser } from 'components/userContent';
export const ContactListItem = ({ id, user, phone }) => {
  const { handleDelete } = useUser();
  return (
    <li>
      {user}: {phone}{' '}
      <button type="button" onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};
