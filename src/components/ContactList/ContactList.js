import React from 'react';
import PropTypes from 'prop-types'
import styles from'../../Phonebook.module.css'


const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={styles.contacts}>
        {contacts.map(({id, name, number}) => (
            <li className={styles.contacts__item} key={id}>
                <p>{name}: {number}</p>
                <button className={styles.buttonDelete} type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
) 

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,    
    onDeleteContact: PropTypes.func.isRequired,    
}

export default ContactList;