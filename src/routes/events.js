// host + /api/events
const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventsController');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

// Todas las rutas deben pasar por este middleware
router.use(validateToken);

// Obtener eventos
router.get(
    '/',
    getEvents
);

// Crear Evento
router.post(
    '/',
    createEvent
);

// Actualizar Evento
router.put(
    '/:id',
    updateEvent
);

// Eliminar Evento
router.delete(
    '/:id',
    deleteEvent
);

module.exports = router;