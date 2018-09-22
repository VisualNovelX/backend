const posts = require('./posts');
const router = require('express').Router();

router.get('/', posts.list);
router.get('/:id', posts.find);
router.post('/', posts.create);
router.post('/:id', posts.update);
router.post('/:id', posts.remove);

module.exports = router;
