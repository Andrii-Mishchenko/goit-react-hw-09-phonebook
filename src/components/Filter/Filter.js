import React from 'react';
import styles from'../../styles/ContactsView.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contacts-selectors';


const Filter = () => {
    const value = useSelector(getFilter)
    const dispatch = useDispatch();
    const onChange = e => dispatch(filterContacts(e.target.value))

    return (
        <div className={styles.form}>
            <label className={styles.form__label}>
                Find contacts by name
                <input 
                    className={styles.form__input}
                    type="text" value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
 
export default Filter;


// const Filter = ({value, onChange}) => (
//     <div className={styles.form}>
//         <label className={styles.form__label}>
//             Find contacts by name
//             <input 
//                 className={styles.form__input} 
//                 type="text" value={value} 
//                 onChange={onChange}
//             />
//         </label>
//     </div>
// )
 


// const mapStateToProps = (state) => ({
//     value: getFilter(state),
    
// })


// const mapDispatchToProps = dispatch => ({
//     onChange: (e) => dispatch(filterContacts(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);