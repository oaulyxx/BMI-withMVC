const express = require('express');
const bmiController = require('../controllers/bmiController');

const router = express.Router();

router.post('/calculate-bmi', bmiController.calculate);

module.exports = router;
