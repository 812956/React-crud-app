const User = require("../models/User");

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.getAllContent = (req, res) => {
    res.status(200).send("Public Content.");
  };

// New user management methods
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { username, role } = req.body;
  const newUser = new User({ username, roles: [role] });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { username, role } = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, roles: [role] }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.toggleBlockUser = async (req, res) => {

  console.log('helllo world HOW ARE HOIY ')
  try {
    const user = await User.findById(req.params.id);
    user.block = !user.block;
    await user.save();
    res.send({ message: `User ${user.block ? "blocked" : "unblocked"} successfully.` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};