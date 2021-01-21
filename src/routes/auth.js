// host + /api/auth
const { Router } = require('express');
const { createUser, loginUser, revalidateToken } = require('../controllers/authController');
const router = Router();

router.post(
    '/new',
    createUser
);

router.post(
    '/',
    loginUser
);

router.get(
    '/renew',
    revalidateToken
)

module.exports = router;