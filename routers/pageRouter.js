const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/add').get(pageController.getAddPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/contact').post(pageController.sendEmail);

module.exports = router;
