import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

function ContactItem({ contact, onDelete }) {
  return (
    <Card sx={{ height: 320, display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
      <CardContent sx={{ flexGrow: 1, overflow: 'auto' }} className="scrollable-element">
        <Typography variant="h6" noWrap>{contact.name}</Typography>
        <Box sx={{ height: '100%', overflow: 'auto' }} className="scrollable-element">
          <Typography color="textSecondary" paragraph>{contact.phoneNo}</Typography>
          <Typography color="textSecondary" paragraph>{contact.email}</Typography>
          <Typography color="textSecondary" paragraph>{contact.address}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/edit/${contact._id}`}
          size="small"
          color="primary"
          startIcon={<Edit />}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="secondary"
          startIcon={<Delete />}
          onClick={() => onDelete(contact._id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ContactItem;
