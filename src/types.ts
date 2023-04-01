export type Book = {
  isbn: string;
  title: string;
  authors: string[];
  bookItems: {
    id: string;
    libId: string;
    isLent: boolean;
  }[];
}
