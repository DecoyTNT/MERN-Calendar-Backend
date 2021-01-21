

const createUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'Create User'
    });
}

const loginUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'Login User'
    });
}

const revalidateToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'Revalidate Token'
    });
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}