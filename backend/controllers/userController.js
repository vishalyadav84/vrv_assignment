const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt =require("bcryptjs")

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.create({ username, password, role });
        const token =generateToken(user._id);
        res.set('Authorization', `Bearer ${token}`);
        res.status(201).json({
            id: user._id,
            username: user.username,
            role: user.role,
            token:token,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token =generateToken(user._id);
        res.set('Authorization', `Bearer ${token}`);
        res.json({
            id: user._id,
            username: user.username,
            role: user.role,
            token:token,
            msg:"LOgged in successfully"
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

module.exports = { registerUser, loginUser, getUsers };
