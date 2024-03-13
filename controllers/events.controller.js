const { body, validationResult } = require('express-validator');

let events = [];

exports.getEvents = (req, res) => {
  res.render('events', { events });
};

exports.getCreateEventForm = (req, res) => {
  res.render('create-event');
};

const eventValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('date').notEmpty().withMessage('Date is required').isDate().withMessage('Invalid date format'),
  body('description').notEmpty().withMessage('Description is required'),
];

exports.createEvent = [
  eventValidationRules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, date, description } = req.body;
    const newEvent = { id: events.length + 1, name, date, description };
    events.push(newEvent);
    res.redirect('/events');
  },
];

exports.getUpdateEventForm = (req, res) => {
  const eventId = req.params.id;
  const event = events.find(e => e.id === parseInt(eventId));
  if (!event) {
    return res.status(404).send('Event not found');
  }
  res.render('update-event', { event });
};

exports.updateEvent = [
  eventValidationRules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const eventId = req.params.id;
    const { name, date, description } = req.body;
    const eventIndex = events.findIndex(e => e.id === parseInt(eventId));
    if (eventIndex === -1) {
      return res.status(404).send('Event not found');
    }
    events[eventIndex] = { id: parseInt(eventId), name, date, description };
    res.redirect('/events');
  },
];

exports.deleteEvent = (req, res) => {
  const eventId = req.params.id;
  const eventIndex = events.findIndex(e => e.id === parseInt(eventId));
  if (eventIndex === -1) {
    return res.status(404).send('Event not found');
  }
  events.splice(eventIndex, 1);
  res.redirect('/events');
};




