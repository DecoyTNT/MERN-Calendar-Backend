// host + /api/auth
const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/authController');
const { validateFields } = require('../middlewares/validateFields');
const router = Router();

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 carácteres').isLength({ min: 6 }),
        validateFields
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 carácteres').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

router.get(
    '/renew',
    revalidateToken
)

module.exports = router;