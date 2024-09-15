import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, CircularProgress, Box } from '@mui/material';

import { fetchBooks } from '../api/bookApi';
import AddBookModal from '../components/AddBookModal';
import { Book, BookWithRating } from '../types';
import useModal from '../hooks/useModal';
import { BookCards } from '../utils/books';

const BooksDirectory: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { modalOpen, selectedBook, openModal, closeModal } = useModal();

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks('react');
        setBooks(data);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const booksRecord: Record<string, BookWithRating> = books as unknown as Record<string, BookWithRating>;

  return (
    <Container sx={{ marginTop: '60px' }}>
      {loading ? (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={3}>
          <BookCards books={booksRecord} openModal={openModal} bookPage='Directory' />
        </Grid>
      )}
      {selectedBook && (
        <AddBookModal
          open={modalOpen}
          onClose={closeModal}
          book={selectedBook}
        />
      )}
    </Container>
  );
};

export default BooksDirectory;