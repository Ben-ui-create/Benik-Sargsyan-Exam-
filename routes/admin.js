import {Router} from 'express';

import admin from '../middlewares/admin.js';
import controller from '../controllers/adminController.js';

const router = Router();

router.post(
  '/showtimes',
  admin,
  controller.createShowtime,
);

router.get(
  '/showtimes',
  admin,
  controller.getShowtime,
);

router.delete(
  '/showtimes/:id',
  admin,
  controller.deleteShowtimes,
);

export default router;