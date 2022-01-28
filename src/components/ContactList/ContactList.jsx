import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactListStyled from "./ContactList.styled";
import ContactListItem from "../ContactListItem/ContactListItem";

class ContactList extends Component {
  render() {
    return (
      <ContactListStyled>
        {this.props.contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onClick={this.props.onClick}
          />
        ))}
      </ContactListStyled>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};

export default ContactList;
