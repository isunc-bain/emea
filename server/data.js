const csv = require('csvtojson');
const mCache = require('memory-cache');

function loadBooksToCache() {
  csv()
    .fromFile(__dirname + '/../books.csv')
    .then(books => mCache.put('books', books));
}

module.exports = loadBooksToCache;
