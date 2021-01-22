// host + /api/events
const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, getEventsUser, createEvent, updateEvent, deleteEvent } = require('../controllers/eventsController');
const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validateFields');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

// Todas las rutas deben pasar por este middleware
router.use(validateToken);

// Obtener eventos
router.get(
    '/',
    getEvents
);

router.get(
    '/user',
    getEventsUser
);

// Crear Evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validateFields
    ],
    createEvent
);

// Actualizar Evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validateFields
    ],
    updateEvent
);

// Eliminar Evento
router.delete(
    '/:id',
    deleteEvent
);

module.exports = router;