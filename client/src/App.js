import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloProvider';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='app'>
        <h1>heyyyyy</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
