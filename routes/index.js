import {Router} from 'express';

import usersRouter from './auth.js';
import filmsRouter from './film.js';
import bookingRouter from './booking.js';

const router = new Router();

router.use('/users', usersRouter);
router.use('/films', filmsRouter);
router.use('/bookings', bookingRouter);

export default router;