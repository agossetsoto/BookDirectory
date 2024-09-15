import React, { createContext, useState, ReactNode } from 'react';
import { Book, BookWithRating } from '../types';

interface BookContextType {
  book: Record<string, BookWithRating>;
  addBook: (book: Book, rating: number, pile: 'alreadyRead' | 'wantToRead') => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [book, setBook] = useState<Record<string, BookWithRating>>({});

  const addBook = (book: Book, rating: number, pile: 'alreadyRead' | 'wantToRead') => {
    setBook((prevRatings) => ({
      ...prevRatings,
      [book?.key]: {
        ...book,
        rating,
        pile
      },
    }));
  };

  return (
    <BookContext.Provider value={{ book, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider, BookContext };
