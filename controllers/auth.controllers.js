const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = [];

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });

  res.json({ token });
};