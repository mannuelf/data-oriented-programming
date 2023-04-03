import {map} from './utils/map.ts';
import lodash from 'https://esm.sh/lodash@4.17.21';

const _ = lodash;

/*
export const authors = _.map(['alan-moore', 'dave-gibbons'], (authorId: string) =>
  _.get(catalogData, ['authorsById', authorId, 'name']),
);
*/
export const authors = (catalogData) =>
  map(['alan-moore', 'dave-gibbons'], (authorId) =>
    _.get(catalogData, ['authorsById', authorId, 'name']),
  );
