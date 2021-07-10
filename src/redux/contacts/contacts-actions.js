import types from './contacts-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number  
    }
})

const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
})

const filterContacts = value => ({
    type: types.FILTER,
    payload: value,
})


export default { addContact, deleteContact, filterContacts };