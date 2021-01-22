
const getEvents = async (req, res) => {
    try {
        res.json({
            ok: true
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
        res.json({
            ok: true
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
        res.json({
            ok: true
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
        res.json({
            ok: true
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
    createEvent,
    updateEvent,
    deleteEvent
}