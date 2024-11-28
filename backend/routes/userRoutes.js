const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController.js');
const { protect, authorize } = require('../middlewares/authMiddleware.js');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, authorize('Admin'), getUsers);

module.exports = router;
