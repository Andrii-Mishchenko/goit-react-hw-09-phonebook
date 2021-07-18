import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,

    addContactRequest,
    addContactSuccess,
    addContactError,

    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    filterContacts
 } from './contacts-actions'


const items = createReducer([], {
    [fetchContactsSuccess]: (state, { payload }) => payload,
    
    [addContactSuccess]: (state, { payload }) => state.map(contact => contact.name).includes(payload.name)
    ? alert(`${payload.name} is already in contacts.`)
    : [payload, ...state],
  
    
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
})

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
})

const filter = createReducer('', {
    [filterContacts]: (state, { payload }) => payload,
})

const error = createReducer(null, {})

export default combineReducers({
    items,
    filter,
    loading,
    error,
})