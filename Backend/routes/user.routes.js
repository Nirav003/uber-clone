const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usserController = require('../controllers/user.controller');

router.post('/register', [
        body('email').isEmail().withMessage('Invalid email'),
        body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    usserController.registerUser
);

router.post('/login', [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    usserController.loginUser
)

module.exports = router;