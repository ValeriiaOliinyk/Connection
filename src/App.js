// Base
import React from "react";
import { connect } from "react-redux";

// Components
import Container from "./components/Container";
import Section from "./components/Section";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = ({ contacts }) => {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length >= 2 && <Filter />}
        <ContactList />
      </Section>
    </Container>
  );
};

const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts: contacts,
});

export default connect(mapStateToProps, null)(App);
