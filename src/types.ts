export type FormValues = {
  email: string;
  password: string;
};

export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: any;
}

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  rating?: number;
}

export interface BookWithRating {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  rating?: number;
  pile: "alreadyRead" | "wantToRead";
}