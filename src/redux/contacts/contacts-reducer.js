import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions'
import initialContacts from '../../initialContacts.json'

const items = createReducer(initialContacts, {
    
    [actions.addContact]: (state, { payload }) => state.map(contact => contact.name).includes(payload.name)
    ? alert(`${payload.name} is already in contacts.`)
    : [payload, ...state],
    
    [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
})

const filter = createReducer('', {
    [actions.filterContacts]: (state, { payload }) => payload,
})

export default combineReducers({
    items,
    filter
})