const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.create)
router.get('/', postController.index)
router.get('/search', postController.searchPostByContent)
router.get('/:slug', postController.show)

module.exports = router;