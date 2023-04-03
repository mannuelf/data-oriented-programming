import lodash from 'https://esm.sh/lodash@4.17.21';
import { authorNames } from './author-names.ts';

const _ = lodash;

export function bookInfo(catalogData, book) {
//  console.log(book);

  const aBook = {
    title: _.get(book, 'title'),
    isbn: _.get(book, 'isbn'),
    authorNames: authorNames(catalogData, book),
  };
  return aBook;
}
