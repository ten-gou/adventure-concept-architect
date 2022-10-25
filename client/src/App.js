import './App.css';
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, styled, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Doujin from './pages/Doujin';
import VN from './pages/VN';

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

//color palette and theming for the website
//lays the groundwork for the night mode toggle
const theme = createTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#000000',
    },
    secondary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#000',
    },
  },
  spacing: 4,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <>
          <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/doujin' element={<Doujin />}></Route>
            <Route exact path='/visualnovel' element={<VN />}></Route>
          </Routes>
          </ThemeProvider>
        </>
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
