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
  }
});

module.exports = router;
