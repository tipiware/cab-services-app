const express = require('express');
const router = express.Router();
const ScheduleCabFormController = require('../controllers/scheduleCabForm');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');

router.get('', checkAuth, ScheduleCabFormController.getAllForms);
router.post('', checkAuth, ScheduleCabFormController.createForm);
router.delete('/:id', checkAuth, checkAdmin, ScheduleCabFormController.deleteForm);
router.patch('/:id', checkAuth, ScheduleCabFormController.updateForm);
router.get('/:id', checkAuth, ScheduleCabFormController.getFormById);

module.exports = router;