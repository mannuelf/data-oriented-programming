import lodash from 'https://esm.sh/lodash@4.17.21';
import { catalogData } from './data/catalog.ts';
import type { catalogData as catalogDataType } from './types.ts';
import { get } from './utils/get.ts';
import { map } from './utils/map.ts';

const _ = lodash;

// const title = _.get(catalogData, ['booksByIsbn', '978-1779501127', 'title']);
const title: string = get<catalogDataType, string[]>(catalogData, [
  'booksByIsbn',
  '978-1779501127',
  'title',
]);

console.log('title:', title);

/*
const authors = _.map(['alan-moore', 'dave-gibbons'], (authorId: string) =>
  _.get(catalogData, ['authorsById', authorId, 'name']),
);
*/

const authors = map(['alan-moore', 'dave-gibbons'], (authorId) =>
  get(catalogData, ['authorsById', authorId, 'name']),
);

console.log(authors);
