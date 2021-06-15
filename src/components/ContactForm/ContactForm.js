import React, {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types'
import styles from'../../Phonebook.module.css'


class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = { 
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleInput = e =>{
        const {name, value} = e.currentTarget
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state)
        // this.props.onSubmit(this.state.name)
        // this.props.onSubmit(this.state.number)
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() { 
        return ( 
            <form className={styles.form} onSubmit={this.handleSubmit} >
                <label className={styles.form__label} htmlFor={this.nameInputId}>
                    Name
                    <input
                        className={styles.form__input}
                        type="text"
                        value={this.state.name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleInput}
                        id={this.nameInputId}
                    />
                </label>
            
                <label className={styles.form__label} htmlFor={this.numberInputId}>
                    Number
                    <input
                        className={styles.form__input}
                        type="tel"
                        value={this.state.number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handleInput}
                        id={this.numberInputId}
                    />
                </label>
                <button className={styles.button} type="submit">Add contact</button>
            </form>
         );
    }
}
 
export default ContactForm;
