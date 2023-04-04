import lodash from 'https://esm.sh/lodash@4.17.21';
import { authorNames } from './author-names.ts';
import { authors } from './authors.ts';
import { bookInfo } from './book-info.ts';
import { CatalogData } from './data/CatalogData.ts';
import { get } from './utils/get.ts';
import { Book } from './data/Book.ts';
import { searchBooksByTitle } from './search-books-by-title.ts';

const _ = lodash;

const getBookTitle = ['booksByIsbn', '978-1779501127', 'title'];
const getAuthors = ['authorsById', 'alan-moore'];
const getBookItems = ['booksByIsbn', '978-1779501127', 'bookItems'];
const getBook = ['booksByIsbn', '878-1779501127'];

//console.log('getBook',_.get(CatalogData, getBook));

//console.log(getBookTitle);

// const title = _.get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);
//const aBookTitle = get(CatalogData, getBookTitle);
// console.log('bookTitle:', aBookTitle);

//console.log(get(CatalogData, getBookItems));

const allAuthors = authors(CatalogData, getBook);
//console.log('authors:', allAuthors);

const allAuthorNames = authorNames(CatalogData, getBook);
//console.log('authorNames:', allAuthorNames);

const bookInformation = bookInfo(CatalogData, getBook);
//console.log('bookInformation', bookInformation);

/*
console.log(
  _.map(['alan-moore', 'dave-gibbons'], (authorId) =>
    _.get(CatalogData, ['authorsById', authorId, 'bookIsbns']),
  ),
);
 */

/*
const bookInfo = {
  title: _.get(CatalogData, ['booksByIsbn', '978-1779501127', 'title']),
  isbn: _.get(CatalogData, ['booksByIsbn', '978-1779501127', 'isbn']),
};
console.log(bookInfo);
 */

const mySearch = searchBooksByTitle(CatalogData, getBook);
console.log(mySearch);

