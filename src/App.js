// Base
import React, { Component } from "react";
import shortId from "shortid";

// Components
import Container from "./components/Container";
import Section from "./components/Section";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = (name, number) => {
  //   const { contacts } = this.state;
  //   const currentContact = {
  //     id: shortId.generate(),
  //     name,
  //     number,
  //   };

  //   const hasName = contacts.some(
  //     contact => contact.name === currentContact.name.trim(),
  //   );

  //   if (hasName) {
  //     alert(`${currentContact.name.trim()} is already in contacts`);
  //     return;
  //   }

  //   this.setState(({ contacts }) => ({
  //     contacts: [currentContact, ...contacts],
  //   }));
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // deleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (currentContact) => currentContact.id !== contactId
  //     ),
  //   }));
  // };

  render() {
    // const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {/* {contacts.length >= 2 && <Filter />} */}
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}

export default App;
