import {Book} from "../types";

export const watchManBook: Book = {
  isbn: "978-123345666",
  title: "Watchman",
  authors: ["alan-moor", "dave-gibbon"],
  bookItems: [
    {
      id: "book-item-1",
      libId: "nyc-central-lib",
      isLent: true,
    },
    {
      id: "book-item-2",
      libId: "nyc-central-lib",
      isLent: true,
    },
  ],
};
