import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Button, Typography } from '@mui/material';
import ContactItem from './ContactItem';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://54.175.208.182:80/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://18.210.18.128:80/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div style={{marginBottom: "2rem"}}>
      <Button
        component={Link}
        to="/add"
        variant="contained"
        color="primary"
        sx={{ marginBottom: '1rem' }}
      >
        Add New Contact
      </Button>
      <Grid container spacing={3}>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} key={contact._id}>
            <ContactItem contact={contact} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ContactList;
