import PropTypes from "prop-types";

const ContactListItem = ({ contact, onClick }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onClick: PropTypes.func,
};

export default ContactListItem;
