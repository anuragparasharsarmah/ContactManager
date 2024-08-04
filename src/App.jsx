import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      marginBottom: '1rem',
    },
    body1: {
      marginBottom: '0.5rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<ContactForm />} />
            <Route path="/edit/:id" element={<ContactForm />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
