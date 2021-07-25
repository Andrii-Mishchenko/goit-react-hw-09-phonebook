import React from 'react';
import PropTypes from 'prop-types'
import styles from'../../styles/ContactsView.module.css'
import { connect } from 'react-redux';
import {contactsOperations} from '../../redux/contacts';
import {getVisibleContacts} from '../../redux/contacts/contacts-selectors';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={styles.form}>
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


const mapStateToProps = state =>({
    contacts: getVisibleContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

