const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  const user = new User({
    username,
    email,
    password: hashedPassword,
    roles:['user']
  });

  console.log('hello fdsjlfjas',user)

  try {
    await user.save();
    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).send({ message: "User Not found." });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).send({ accessToken: null, message: "Invalid Password!" });

  const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 }); // 24 hours

  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    accessToken: token,
    roles: user.roles,
  });
};
