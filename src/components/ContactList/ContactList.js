import React, {useCallback} from 'react';
import styles from'../../styles/ContactsView.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {contactsOperations} from '../../redux/contacts';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const onDeleteContact = useCallback((id) => {
        dispatch(contactsOperations.deleteContact(id));
        }, [dispatch]
    );

    return (
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
     );
}

 
export default ContactList;

// const ContactList = ({contacts, onDeleteContact}) => (
//     <ul className={styles.form}>
//         {contacts.map(({id, name, number}) => (
//             <li className={styles.contacts__item} key={id}>
//                 <p>{name}: {number}</p>
//                 <button 
//                     className={styles.buttonDelete} 
//                     type="button" 
//                     onClick={() => onDeleteContact(id)}
//                 >Delete</button>
//             </li>
//         ))}
//     </ul>
// ) 

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,    
//     onDeleteContact: PropTypes.func.isRequired,    
// }


// const mapStateToProps = state =>({
//     contacts: getVisibleContacts(state),
// })

// const mapDispatchToProps = dispatch => ({
//     onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

