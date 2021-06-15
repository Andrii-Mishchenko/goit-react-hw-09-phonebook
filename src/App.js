import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import shortid from 'shortid';
import styles from'./Phonebook.module.css'

class App extends Component {
    static defaultProps = {
        initialContacts: [],
    }
  
    static propTypes = {
      initialValue: PropTypes.array,
    }

    state = { 
        contacts: this.props.initialContacts,
        filter: ''
    }

    // handleNameInput = e => {      
    //     this.setState({name: e.currentTarget.value})
    // }
    // handleNumberInput = e => { 
    //     this.setState({number: e.currentTarget.value})
    // }
    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact=>contact.id !== contactId),
        }))
    }

    formSubmitHandler = ({name, number}) =>{
   
        const contact = {
            id: shortid.generate(),
            name,
            number
        }

        const { contacts } = this.state;
        const names = contacts.map((contact) => contact.name);

        names.includes(contact.name)
        ? alert(`${contact.name} is already in contacts.`)
        : this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts]
        }))
    }

    changeFilter = (e) => {
        this.setState({filter: e.currentTarget.value});
    }

    getVisibleContacts =() => {
        const {contacts, filter} = this.state;
        const normalizedFilter= filter.toLowerCase();
        return contacts.filter(contact=>
            contact.name.toLowerCase().includes(normalizedFilter));
    }

    render() { 
        const {filter} = this.state;
        
        const visibleContacts = this.getVisibleContacts();

        return (  
            <div className={styles.container}>
                <h1 className={styles.title}>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmitHandler}/>
                <h2 className={styles.title}>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter}/>
                <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>

            </div>

        );
    }
}
 
export default App;


