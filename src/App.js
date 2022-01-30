import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Section from "./components/Section.styled";

class App extends Component {
  state = {
    contacts: "",
    filter: "",
  };

  componentDidMount() {
    try {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      this.setState({ contacts });
    } catch {
      console.error();
      this.setState({ contacts: ""});
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (!this.state.contacts) {
      this.setState({
          contacts: [newContact],
      });
    } else if (
      this.state.contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )) {
      window.alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }

    form.reset();
  };

  handleSearch = (e) => {
    const filter = e.target.value.toLowerCase();
    this.setState({ filter });
  };

  filterContact = () => {
    try {
      return this.state.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.state.filter);
      });
    } catch { 
      return false;
    }
  };

  handleDelete = (e) => {
    const nameToDelete = e.target.parentNode.firstChild.data.toLowerCase();
    const newContacts = this.state.contacts.filter(
      (contact) => contact.name.toLowerCase() !== nameToDelete
    );
    this.setState({ contacts: newContacts });
  };

  formId = nanoid();

  render() {
    return (
      <Section>
        <p>Phonebook</p>
        <ContactForm onSubmit={this.handleSubmit} htmlFor={this.formId} />
        <p>Contacts</p>
        <Filter onChange={this.handleSearch} />
        {this.filterContact() && 
        <ContactList
          contacts={this.filterContact()}
          onClick={this.handleDelete}
        />}
      </Section>
    );
  }
}

export default App;
