import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthRoute from './utils/AuthRoute';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import { ApolloProvider } from '@apollo/client';
import client from './ApolloProvider';
import { AuthProvider } from './context/auth';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Container>
            <MenuBar />
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
          </Container>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
