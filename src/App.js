import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
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
                    <Route exact path="/" component={HomeView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/contacts" component={ContactsView} />
                    <Route component={NotFoundView} />
                </Switch>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser
}
 
export default connect(null, mapDispatchToProps)(App);

