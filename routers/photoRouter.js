const express = require('express');
const photoController = require('../controllers/photoController');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/edit/:id').get(pageController.getEditPage);

router.route('/').post(photoController.createPhoto);
router.route('/:id').get(photoController.getPhoto);
router.route('/:id').put(photoController.updatePhoto);
router.route('/:id').delete(photoController.deletePhoto);

module.exports = router;