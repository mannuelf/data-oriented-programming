import lodash from 'https://esm.sh/lodash@4.17.21';
import { authorNames } from './author-names.ts';
import { authors } from './authors.ts';
import { CatalogData } from './data/CatalogData.ts';
import { get } from './utils/get.ts';

const _ = lodash;

const getBookTitle = ['booksByIsbn', '978-1779501127', 'title'];
const getAuthors = ['authorsById', 'alan-moore'];
const getBookItems = ['booksByIsbn', '978-1779501127', 'bookItems'];

console.log(getBookTitle);

// const title = _.get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);
//const aBookTitle = get(CatalogData, getBookTitle);
// console.log('bookTitle:', aBookTitle);

//console.log(get(CatalogData, getBookItems));

//const allAuthors = authors(CatalogData);
//console.log('authors:', allAuthors);

//const allAuthorNames = authorNames(CatalogData, ['booksByIsbn', '978-1779501127', 'authorIds']);
//console.log('authorNames:', allAuthorNames);

//const bookInformation = bookInfo(CatalogData, book);
//console.log('bookInformation', bookInformation);

console.log(
  _.map(['alan-moore', 'dave-gibbons'], (authorId) =>
    _.get(CatalogData, ['authorsById', authorId, 'bookIsbns']),
  ),
);

const bookInfo = {
  title: _.get(['booksByIsbn', '978-1779501127'], 'title'),
  isbn: _.get([], 'isbn'),
};
console.log(bookInfo);
