import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';
import RegisterView from './views/RegisterView';



class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    
    render() { 
        return (
            <Container>
                <AppBar />
                
                <Switch>
                    <PublicRoute exact path="/" component={HomeView} />
                    <PublicRoute path="/register" restricted component={RegisterView} redirectTo="/contacts" />
                    <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
                    <PrivateRoute path="/contacts" component={ContactsView} redirectTo="/login" />
                    <PublicRoute component={NotFoundView} />
                </Switch>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser
}
 
export default connect(null, mapDispatchToProps)(App);

