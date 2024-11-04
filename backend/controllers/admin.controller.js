const User = require("../models/User");

exports.createUser = async (req, res) => {

    console.log('hello')
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password, 
            roles: ['user'] 
        });
        await newUser.save();
        res.status(201).send({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    
    try {
        const user =  await User.findByIdAndDelete(req.params.id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



  
