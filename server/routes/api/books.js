const router = require('express').Router();
const loadBooksToCache = require('../../data');
const mCache = require('memory-cache');

loadBooksToCache();

router.get('', async (req, res) => {
  try {
    const books = mCache.get('books');
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.render('error', { error: error });
  }
});

router.get('/:bookId', async (req, res) => {
  try {
    const bookId = req.params['bookId'];
    if (bookId) {
      const book = mCache.get('books')[bookId];
      if (book) {
        return res.send(book);
      }
    }
    return res.status(404).send('Not found');
  } catch (error) {
    res.status(500);
    res.render('error', { error: error });
  }
});

module.exports = router;
