import axios from 'axios';

import { Book } from '../types';

const API_URL = 'https://openlibrary.org/search.json';

interface ApiResponse {
  docs: Book[];
}

// The fetchBooks function for handling form submission
export const fetchBooks = async (query: string): Promise<Book[]> => {
  try {
    const response = await axios.get<ApiResponse>(API_URL, {
      params: { q: query }
    });
    return response.data.docs;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};