const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const eventsRoute = require('./routes/events');
app.use('/events', eventsRoute);

app.get('/', (req, res) => {
  const user = req.user;
  res.render('index', { title: 'Event Planning App', user });
});

app.get('/auth', (req, res) => {
  const user = req.user; 
  res.render('auth', { user });
});

app.get('/logout', (req, res) => {
  req.user = null;
  res.redirect('/auth');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});