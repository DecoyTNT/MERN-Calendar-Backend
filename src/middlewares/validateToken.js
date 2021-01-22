const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {

    try {
        const token = req.header('x-token');

        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No hay token en la petición'
            });
        }

        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = uid;
        req.name = name;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validateToken
}