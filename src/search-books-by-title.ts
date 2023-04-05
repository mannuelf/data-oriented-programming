import lodash from 'https://esm.sh/lodash@4.17.21';
import { bookInfo } from './book-info.ts';
import { filter } from './utils/filter.ts';

const _ = lodash;

export function searchBooksByTitle(catalogData, query) {
  console.log('query', query);
  const allBooks = _.values(_.get(catalogData, 'booksByIsbn'));
  console.log('allBooks', allBooks);

  const matchingBooks = _.filter(allBooks, function (book) {
    return _.get(book, 'title').includes(query);
  });

  console.log('matchingBooks', matchingBooks);

  const bookInfos = _.map(matchingBooks, function (book) {
    return bookInfo(catalogData, book);
  });

  return bookInfos;
}
