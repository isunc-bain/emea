const csv = require('csvtojson');
const mCache = require('memory-cache');

function loadBooksToCache() {
  csv()
    .fromFile(__dirname + '/../books.csv')
    .then(books => {
      books.map((book, i) => {
        book.id = i + 1;
      });
      mCache.put('books', books);
    });
}

module.exports = loadBooksToCache;
