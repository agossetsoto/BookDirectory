import React, { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { BookWithRating } from '../types';
import { BookContext } from '../context/BookContext';
import useModal from '../hooks/useModal';
import AddBookModal from '../components/AddBookModal';
import { BookCards } from '../utils/books';

const AlreadyRead: React.FC = () => {
  const { book } = useContext(BookContext)!;
  const { modalOpen, selectedBook, openModal, closeModal } = useModal();

  console.log(book);

  const alreadyReadBooks = Object.entries(book)
    .filter(([_, { pile }]) => pile === 'alreadyRead');

  const wantToReadBooks = Object.entries(book)
    .filter(([_, { pile }]) => pile === 'wantToRead');

  const alreadyReadBooksAsRecord: Record<string, BookWithRating> = alreadyReadBooks as unknown as Record<string, BookWithRating>;
  const wantToReadBooksAsRecord: Record<string, BookWithRating> = wantToReadBooks as unknown as Record<string, BookWithRating>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Already Read
      </Typography>
      {alreadyReadBooks?.length > 0 ? (
        <Grid container spacing={3}>
          <BookCards books={alreadyReadBooksAsRecord} openModal={openModal} bookPage='MyBooks' />
        </Grid>
      ) : (
        <Typography variant="h6">
          No Already Read Books Yet
        </Typography>
      )}
      <Typography variant="h4" gutterBottom>
        Want To Read
      </Typography>
      {wantToReadBooks?.length > 0 ? (
        <Grid container spacing={3}>
          <BookCards books={wantToReadBooksAsRecord} openModal={openModal} bookPage='MyBooks' />
        </Grid>
      ) : (
        <Typography variant="h6">
          No Want to Read Books Yet
        </Typography>
      )}
      {selectedBook && (
        <AddBookModal
          open={modalOpen}
          onClose={closeModal}
          book={selectedBook}
        />
      )}
    </Container>
  )
};

export default AlreadyRead;
