import lodash from 'https://esm.sh/lodash@4.17.21';
import { catalogData } from './data/catalog.ts';
import { get } from './utils/get.ts';

const _ = lodash;

// const title = _.get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);
const title: string = get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);

console.log('title:', title);

const authors = _.map(['alan-moore', 'dave-gibbons'], (authorId: string): string[] =>
  _.get(catalogData, ['authorsById', authorId, 'name']),
);

console.log(authors);
