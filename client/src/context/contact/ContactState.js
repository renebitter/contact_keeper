import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Walter White',
        email: 'heisenberg@saymyna.me',
        phone: '222-222-5555',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Jessie Pinkman',
        email: 'bitch@bitch.me',
        phone: '222-222-1234',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Gustavo Fring',
        email: 'pollo@hermanos.com.mx',
        phone: '333-222-6666',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear FIlter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
