const express = require('express');
const router = express.Router();
const ContactFormController = require('../controllers/contactForm');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');

router.get('', checkAuth, checkAdmin, ContactFormController.getAllContactForms);
router.post('', ContactFormController.createContactForm);
router.delete('/:id', checkAuth, checkAdmin, ContactFormController.deleteContactForm);

module.exports = router;