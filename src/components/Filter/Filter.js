import React from 'react';
import PropTypes from 'prop-types';
import styles from'../../Phonebook.module.css'

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
    value: PropTypes.string.isRequired,    
    onChange: PropTypes.func.isRequired,    
}

export default Filter;