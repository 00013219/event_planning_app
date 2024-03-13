const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.controller');
const authController = require('../controllers/auth.controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/', eventsController.getEvents);
router.get('/create', eventsController.getCreateEventForm);
router.post('/create', eventsController.createEvent);
router.get('/update/:id', eventsController.getUpdateEventForm);
router.post('/update/:id', eventsController.updateEvent);
router.get('/delete/:id', eventsController.deleteEvent);

module.exports = router;