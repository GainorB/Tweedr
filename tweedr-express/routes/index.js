const express = require('express');
const router = express.Router();
const db = require('../db/queries');

router.get('/', (req, res, next) => {
  res.render('index', { title: "Tweedr App" });
});

// GET FROM DATABASE
router.get('/get', db.getTweeds);

// POST TO DATABASE
router.post('/create', db.createTweed);

// DELETE FROM DATABASE
router.delete('/delete/:id', db.deleteTweed);

module.exports = router;