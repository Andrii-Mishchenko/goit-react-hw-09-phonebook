import React, {Component} from 'react';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import styles from'./Phonebook.module.css'

class App extends Component {
  
      // formSubmitHandler = ({name, number}) =>{
   
    //     const contact = {
    //         id: shortid.generate(),
    //         name,
    //         number
    //     }

    //     const { contacts } = this.state;
    //     const names = contacts.map((contact) => contact.name);

    //     names.includes(contact.name)
    //     ? alert(`${contact.name} is already in contacts.`)
    //     : this.setState(prevState => ({
    //         contacts: [contact, ...prevState.contacts]
    //     }))
    // }

    render() { 

        return (  
            <div className={styles.container}>
                <h1 className={styles.title}>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmitHandler}/>
                <h2 className={styles.title}>Contacts</h2>
                <Filter/>
                <ContactList/>
            </div>
        );
    }
}
 
export default App;


