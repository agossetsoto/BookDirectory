import { useState } from 'react';
import { Book } from '../types';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
  };

  return {
    modalOpen,
    selectedBook,
    openModal,
    closeModal,
  };
};

export default useModal;
