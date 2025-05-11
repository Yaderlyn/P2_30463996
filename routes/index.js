const express = require('express');
const router = express.Router();
const ContactsController = require('../controllers/ContactsController');
const PaymentsController = require('../controllers/PaymentsController');



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', (req, res) => res.render('payment'));

router.get('/admin/contacts', ContactsController.contacts);


router.post('/contact/add', ContactsController.add);
router.post('/payment/add', PaymentsController.add)



module.exports = router;
