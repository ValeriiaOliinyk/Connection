import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <br />
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder="Type name... "
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
