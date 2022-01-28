import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Section from "./components/Section.styled";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    try {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      this.setState({ contacts });
    } catch {
      console.error();
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

    if (
      this.state.contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
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
    return this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
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
        <ContactList
          contacts={this.filterContact()}
          onClick={this.handleDelete}
        />
      </Section>
    );
  }
}

export default App;
