const express = require('express');
const router = express.Router();

router.get('/payment-due', (req, res) => {
    res.render('paymentDue');  // `views/paymentDue.ejs` file ko render karega
});

module.exports = router;
