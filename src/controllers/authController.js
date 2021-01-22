const User = require("../models/User");
const bcrypt = require('bcrypt');
const { generateToken } = require("../helpers/jwt");

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: `El email ${email} ya esta registrado`
            });
        }

        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        // Generar JWT
        const token = await generateToken(user.id, user.name);

        res.status(201).json({
            ok: true,
            user,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Los datos son incorrectos'
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                ok: false,
                msg: 'Los datos son incorrectos'
            });
        }

        // Generar JWT
        const token = await generateToken(user.id, user.name);

        res.json({
            ok: true,
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const revalidateToken = async (req, res) => {
    try {
        const uid = req.uid;
        const name = req.name;

        const token = await generateToken(uid, name);

        res.json({
            ok: true,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}