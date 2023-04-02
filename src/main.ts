import lodash from 'https://esm.sh/lodash@4.17.21';
import { CatalogData } from './data/Catalog.ts';
import { get } from './utils/get.ts';
import { map } from './utils/map.ts';

const _ = lodash;

// const title = _.get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);
const book: string = get(CatalogData, ['booksByIsbn', '978-1779501127', 'title']);
console.log('book:', book);

/*
const authors = _.map(['alan-moore', 'dave-gibbons'], (authorId: string) =>
  _.get(catalogData, ['authorsById', authorId, 'name']),
);
*/
const authors = map(['alan-moore', 'dave-gibbons'], (authorId) =>
  get(CatalogData, ['authorsById', authorId, 'name']),
);

console.log('authors:', authors);

const authorNames = (catalog, book) => {
  console.log('authorNames:', book);

  const authorIds = get(book, 'authorIds');
  const names = _.map(authorIds, (authorId) => get(catalog, ['authorsById', authorId, 'name']));
  return names;
};

const bookInfo = (catalog, book) => {
  console.log('bookInfo:', book);

  const bookInfo = {
    title: _.get(book, 'title'),
    isbn: _.get(book, 'isbn'),
    authorNames: authorNames(catalog, book),
  };
  return bookInfo;
};

console.log(bookInfo(CatalogData, book));
