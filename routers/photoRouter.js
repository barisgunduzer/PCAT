const express = require('express');
const photoController = require('../controllers/photoController');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/photos/edit/:id').get(pageController.getEditPage);

router.route('/').get(photoController.getAllPhotos);
router.route('/photos/:id').get(photoController.getPhoto);
router.route('/add_photo').post(photoController.createPhoto);
router.route('/photos/:id').put(photoController.updatePhoto);
router.route('/photos/:id').delete(photoController.deletePhoto);