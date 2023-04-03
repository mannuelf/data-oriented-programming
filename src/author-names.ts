import lodash from 'https://esm.sh/lodash@4.17.21';

const _ = lodash;

export function authorNames(catalogData, book) {
  const authorIds = _.get(book, 'authorIds');
//  console.log(authorIds);

  const names = _.map(authorIds, function (authorId) {
    return _.get(catalogData, ['authorsById', authorId, 'name']);
  });
  return names;
}
