  
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from '../styles/AuthorizationsView.module.css'

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  // const handleEmailChange = e => {
  //   setEmail(e.target.value)
  // }  

  // const handlePasswordChange = e => {
  //   setPassword(e.target.value)
  // }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`Field type name - ${name} does not processed`)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Login page</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.form__label}>
          Email:
          <input
            className={styles.form__input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.form__label}>
          Password:
          <input
            className={styles.form__input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}
 
export default LoginView;


// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1 className={styles.title}>Login page</h1>

//         <form
//           className={styles.form}
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
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

//           <button className={styles.button} type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);