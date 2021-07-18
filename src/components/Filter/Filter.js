import React from 'react';
import PropTypes from 'prop-types';
import styles from'../../Phonebook.module.css'
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contacts-selectors';


const Filter = ({value, onChange}) => (
    <div className={styles.contacts}>
        <label className={styles.form__label}>
            Find contacts by name
            <input 
                className={styles.form__input} 
                type="text" value={value} 
                onChange={onChange}
            />
        </label>
    </div>
)
 
Filter.propTypes = {
    // value: PropTypes.string.isRequired,    
    onChange: PropTypes.func.isRequired,    
}

const mapStateToProps = (state) => ({
    value: getFilter(state),
    
})


const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(filterContacts(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);