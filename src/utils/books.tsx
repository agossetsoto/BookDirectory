import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { BookWithRating } from '../types';

interface BookListProps {
  books: Record<string, BookWithRating>;
  openModal: Function;
  bookPage: 'Directory' | 'MyBooks'
};

export const BookCards: React.FC<BookListProps> = ({ books, openModal, bookPage }) => {
  const useStyles = {
    cardMediaContainer: {
      position: 'relative' as 'relative',
    },
    addIcon: {
      position: 'absolute' as 'absolute',
      top: '24px',
      right: '-16px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'blue',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1976d2',
      },
    },
  };

  const getBooks = Object.entries(books)?.map(([key, bookWithRating]) => {
    // @ts-ignore
    const book = bookPage === 'Directory' ? bookWithRating : bookWithRating[1];
    const { cover_i, title, rating, author_name, first_publish_year} = book;
    return (
      <Grid item xs={12} sm={6} md={4} key={key}>
          <Card>
            <div style={useStyles.cardMediaContainer}>
              {cover_i ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
                  alt={title}
                />
              ) : (
                <CardMedia
                  component="img"
                  height="200"
                  style={{ backgroundColor: '#e0e0e0' }}
                />
              )}
              <IconButton
                style={useStyles.addIcon}
                aria-label="add"
                onClick={() => openModal(book)}
              >
                <AddIcon />
              </IconButton>
              <CardContent>
                <Typography variant="h6">{book?.title}</Typography>
                {rating && rating > 0 && (<Typography variant="subtitle1">Rating: {rating}</Typography>)}
                {author_name && (
                  <Typography variant="subtitle1">
                    {author_name?.join(', ')}
                  </Typography>
                )}
                {first_publish_year && (
                  <Typography variant="caption">
                    First Published: {first_publish_year}
                  </Typography>
                )}
              </CardContent>
            </div>
          </Card>
        </Grid>
    );
  });

  return (
    <>
      {getBooks}
    </>
  );
};