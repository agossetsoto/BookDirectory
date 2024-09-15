import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

import { BookContext } from '../context/BookContext';
import { Book } from '../types';

interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
  book: Book;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ open, onClose, book }) => {
  const { addBook } = useContext(BookContext)!;
  const [rating, setRating] = useState<number>(0);
  const [pile, setPile] = useState<'alreadyRead' | 'wantToRead'>('wantToRead');

  const handleSave = () => {
    addBook(book, rating, pile);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, margin: 'auto', marginTop: '10%', padding: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h6">Add Book Details</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Rating</InputLabel>
          <Select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((rate) => (
              <MenuItem key={rate} value={rate}>{rate}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Pile</InputLabel>
          <Select
            value={pile}
            onChange={(e) => setPile(e.target.value as 'alreadyRead' | 'wantToRead')}
          >
            <MenuItem value="alreadyRead">Already Read</MenuItem>
            <MenuItem value="wantToRead">Want to Read</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleSave} variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBookModal;