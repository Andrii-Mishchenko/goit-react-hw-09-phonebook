import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import Filter from '../components/Filter'
import styles from '../Phonebook.module.css'
import {contactsOperations} from '../redux/contacts';
import { getLoading } from '../redux/contacts/contacts-selectors';


class ContactsView extends Component {

    componentDidMount(){
        this.props.fetchContacts();
    }
  
    render() { 

        return (  
            <div className={styles.container}>
                <h1 className={styles.title}>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmitHandler}/>
                <h2 className={styles.title}>Contacts</h2>
                <Filter />
                {this.props.isLoadingContacts && <h1>Loading</h1>}
                <ContactList/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoadingContacts: getLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);