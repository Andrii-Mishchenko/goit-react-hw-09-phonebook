import React, { useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import Filter from '../components/Filter'
import styles from '../styles/ContactsView.module.css'
import {contactsOperations} from '../redux/contacts';
import { getLoading } from '../redux/contacts/contacts-selectors';


const ContactsView = () => {

    const dispatch = useDispatch();
    const isLoadingContacts = useSelector(getLoading)

    // вместо componentDidMount()
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={styles.title}>Contacts</h2>
            <Filter />
            {isLoadingContacts && <h1 className={styles.title}>Loading</h1>}
            <ContactList/>
        </div>
     );
}
 
export default ContactsView;


// class ContactsView extends Component {

//     componentDidMount(){
//         this.props.fetchContacts();
//     }
  
//     render() { 

//         return (  
//             <div className={styles.container}>
//                 <h1 className={styles.title}>Phonebook</h1>
//                 <ContactForm />
//                 <h2 className={styles.title}>Contacts</h2>
//                 <Filter />
//                 {this.props.isLoadingContacts && <h1 className={styles.title}>Loading</h1>}
//                 <ContactList/>
//             </div>
//         );
//     }
// }
// // onSubmit={this.formSubmitHandler}

// const mapStateToProps = state => ({
//     isLoadingContacts: getLoading(state)
// })

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });
 
// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);