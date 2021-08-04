import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from '../styles/AuthorizationsView.module.css'


const RegisterView = () => { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();   

    dispatch(authOperations.register({ name, email, password }));

    setEmail('');
    setName('');
    setPassword('');
  };

  return (
          <div>
        <h1 className={styles.title}>Registration Page</h1>

        <form
          className={styles.form}
          onSubmit={handleSubmit}       
          autoComplete="off"
          
        >
          <label className={styles.form__label}>
            Name:
            <input
              className={styles.form__input}
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </label>

          <label className={styles.form__label}>
            Email:
            <input
              className={styles.form__input}
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>

          <label className={styles.form__label}>
            Password:
            <input
              className={styles.form__input}
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
   );
}
 
export default RegisterView;

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1 className={styles.title}>Registration Page</h1>

//         <form
//           className={styles.form}
//           onSubmit={this.handleSubmit}       
//           autoComplete="off"
          
//         >
//           <label className={styles.form__label}>
//             Name:
//             <input
//               className={styles.form__input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className={styles.form__label}>
//             Email:
//             <input
//               className={styles.form__input}
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className={styles.form__label}>
//             Password:
//             <input
//               className={styles.form__input}
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className={styles.button} type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// // const mapDispatchToProps = dispatch =>({
// //   onRegister: (data) => dispatch(authOperations.register(data))
// // }) 

// export default connect(null, mapDispatchToProps)(RegisterView)