export type Book = {
  isbn: string;
  title: string;
  authors: string[];
  bookItems: {
    id: string;
    libId: string;
    isLent: boolean;
  }[];
};

export type Author = {
  name: string;
  bookIsbns: string[];
};

export type catalogData = {
  booksByIsbn: {
    key: Book;
  };
  authorsById: {
    key: Author;
  };
};
