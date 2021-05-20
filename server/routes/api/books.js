const router = require('express').Router();
const loadBooksToCache = require('../../data');
const mCache = require('memory-cache');

loadBooksToCache();

router.get('', async (req, res) => {
  try {
    const books = mCache.get('books');
    if (books.length) {
      res.send(books);
    } else {
      res.status(404);
      res.send({ error: 'No books' });
    }
  } catch (error) {
    res.status(500);
    res.send({ error: error });
  }
});

router.get('/:bookId', async (req, res) => {
  try {
    const bookId = req.params['bookId'];
    if (bookId) {
      const book = mCache.get('books')[bookId - 1];
      if (book) {
        return res.send(book);
      }
    }
    res.status(404);
    return res.send({ error: `No books by id: ${bookId}` });
  } catch (error) {
    res.status(500);
    res.send({ error: error });
  }
});

module.exports = router;
