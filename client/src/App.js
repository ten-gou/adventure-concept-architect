import './App.css';
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
//import Doujin from './pages/Doujin';
//import VN from './pages/VN';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <text>Welcome to the hentai prompt generator!</text>
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            {/*<Route exact path='/doujin' element={<Doujin />}></Route> */}
            {/*<Route exact path='/visualnovel' element={<VN />}></Route> */}
          </Routes>
        </>
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;