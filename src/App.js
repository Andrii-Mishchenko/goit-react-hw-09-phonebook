import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';
import RegisterView from './views/RegisterView';



const App = () =>
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
 
export default App;