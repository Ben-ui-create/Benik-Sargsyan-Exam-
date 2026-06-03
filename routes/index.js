import {Router} from 'express';

import usersRouter from './auth.js';
import filmsRouter from './film.js';

const router = new Router();

router.use('/users', usersRouter);
router.use('/films', filmsRouter);

export default router;