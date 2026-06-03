import {Router} from 'express';

import controller from '../controllers/filmController.js';

import validation from '../middlewares/validation.js';
import schema from '../middlewares/schemas/film.schema.js';

const router = new Router();

router.get(
  '/',
  controller.getFilms,
);

router.get(
  '/:id',
  controller.getFilm,
);

router.post(
  '/',
  validation(schema.createFilm, 'body'),
  controller.createFilm,
);

router.put(
  '/:id',
  validation(schema.updateFilm, 'body'),
  controller.updateFilm,
);

router.delete(
  '/:id',
  controller.deleteFilm,
);

export default router;