import React from 'react';
import PropTypes from 'prop-types'
import styles from'../../Phonebook.module.css'
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={styles.contacts}>
        {contacts.map(({id, name, number}) => (
            <li className={styles.contacts__item} key={id}>
                <p>{name}: {number}</p>
                <button 
                    className={styles.buttonDelete} 
                    type="button" 
                    onClick={() => onDeleteContact(id)}
                >Delete</button>
            </li>
        ))}
    </ul>
) 

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,    
    onDeleteContact: PropTypes.func.isRequired,    
}

const getVisibleContacts =(allContacts, filter) => {
    const normalizedFilter= filter.toLowerCase();
    return allContacts.filter(contact=>
        contact.name.toLowerCase().includes(normalizedFilter));
}

const mapStateToProps = state => {
    const { filter, items } = state.contacts;
   
    const visibleContacts = getVisibleContacts(items, filter )

    return {
        
        contacts: visibleContacts,
    }
}

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(operations.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

