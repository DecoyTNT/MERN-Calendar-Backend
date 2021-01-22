const Event = require("../models/Event");

const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
            .populate('user', 'name');

        res.json({
            ok: true,
            events
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const getEventsUser = async (req, res) => {
    try {
        const events = await Event.find({ user: req.uid })
            .populate('user', 'name');

        res.json({
            ok: true,
            events
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);

        event.user = req.uid;

        await event.save();

        res.json({
            ok: true,
            event
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const uid = req.uid;

        let event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tienes permisos para realizar esta acción'
            });
        }

        req.body.user = uid;

        event = await Event.findByIdAndUpdate(eventId, req.body, { new: true });

        res.json({
            ok: true,
            event
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const uid = req.uid;

        let event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tienes permisos para realizar esta acción'
            });
        }

        event = await Event.findByIdAndDelete(eventId);

        res.json({
            ok: true,
            msg: `El evento ${event.title} fue eliminado`
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
    getEvents,
    getEventsUser,
    createEvent,
    updateEvent,
    deleteEvent
}