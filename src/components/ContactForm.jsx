import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, CircularProgress, Paper, Box } from '@mui/material';

function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    phoneNo: '',
    email: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchContact();
    } else {
      resetForm();
    }
  }, [id]);

  const fetchContact = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_READ}/contacts/${id}`);
      setContact(response.data);
    } catch (error) {
      console.error('Error fetching contact:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setContact({
      name: '',
      phoneNo: '',
      email: '',
      address: '',
    });
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await axios.put(`${import.meta.env.VITE_UPDATE}/contacts/${id}`, contact);
      } else {
        await axios.post(`${import.meta.env.VITE_CREATE}/contacts`, contact);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving contact:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Paper sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Edit Contact' : 'Add New Contact'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label="Name"
          value={contact.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="phoneNo"
          label="Phone Number"
          value={contact.phoneNo}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="address"
          label="Address"
          value={contact.address}
          onChange={handleChange}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: '1rem' }}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Contact'}
        </Button>
      </Box>
    </Paper>
  );
}

export default ContactForm;
