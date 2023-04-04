import lodash from 'https://esm.sh/lodash@4.17.21';
import { bookInfo } from './book-info.ts';

const _ = lodash;

export function searchBooksByTitle(catalogData, query) {
  const allBooks = _.values(_.get(catalogData, 'booksByIsbn'));

  const matchingBooks = _.filter(allBooks, (book) => {
    console.log(query);

    return _.get(book, 'title').includes(query);
  });

  const bookInfos = _.map(matchingBooks, (query) => {
    return bookInfo(catalogData, book);
  });

  return bookInfos;
}
