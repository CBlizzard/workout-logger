const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers')



router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create )
router.patch('/:id', controller.update)
router.delete('/:id', controller.deletee)


module.exports = router;