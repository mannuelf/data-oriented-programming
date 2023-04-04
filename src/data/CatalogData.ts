export const CatalogData = {
  booksByIsbn: {
    '978-1779501127': {
      isbn: '978-1779501127',
      title: 'Watchmen',
      publicationYear: 1987,
      authorIds: ['alan-moore', 'dave-gibbons'],
      bookItems: [
        {
          id: 'book-item-1',
          libId: 'nyc-central-lib',
          isLent: true,
        },
        {
          id: 'book-item-2',
          libId: 'nyc-central-lib',
          isLent: false,
        },
      ],
    },
    '878-1779501127': {
      isbn: '878-1779501127',
      title: 'Pursuasive designs',
      publicationYear: 1987,
      authorIds: ['bj-fogg'],
      bookItems: [
        {
          id: 'book-item-1',
          libId: 'nyc-central-lib',
          isLent: true,
        },
        {
          id: 'book-item-2',
          libId: 'nyc-central-lib',
          isLent: false,
        },
      ],
    },
  },
  authorsById: {
    'alan-moore': {
      name: 'Alan Moore',
      bookIsbns: ['978-1779501127'],
    },
    'bj-fogg': {
      name: 'BJ Fogg',
      bookIsbns: ['878-1779501127'],
    },
    'dave-gibbons': {
      name: 'Dave Gibbons',
      bookIsbns: ['978-1779501127'],
    },
  },
};
