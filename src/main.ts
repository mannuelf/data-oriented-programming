import lodash from 'https://esm.sh/lodash@4.17.21';
import { authors } from './authors.ts';
import { CatalogData } from './data/CatalogData.ts';
import {get} from './utils/get.ts';

const _ = lodash;

const bookTitle = ['booksByIsbn', '978-1779501127', 'title'];
const firstBook = ['authorsById', 'alan-moore'];

// const title = _.get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);
const aBookTitle = get(CatalogData, bookTitle);
// console.log('bookTitle:', aBookTitle);

console.log(get(CatalogData, firstBook));


const allAuthors = authors(CatalogData);
//console.log('authors:', allAuthors);

// const allAuthorNames = authorNames(CatalogData, Book);
//console.log('authorNames', allAuthorNames);

// const bookInformation = bookInfo(CatalogData, book);
//console.log('bookInformation', bookInformation);
