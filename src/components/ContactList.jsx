import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Button } from '@mui/material';
import ContactItem from './ContactItem';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_READ}/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_DELETE}/contacts/${id}`);
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