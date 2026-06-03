import {Router} from 'express';

import controller from '../controllers/commentController.js';

import admin from '../middlewares/admin.js';

const router = new Router();

router.post(
  '/',
  controller.createComment,
);

router.get(
  '/film/:filmId',
  controller.getFilmComments,
);

router.put(
  '/:id',
  controller.updateComment,
);

router.delete(
  '/:id',
  controller.deleteComment,
);

router.patch(
  '/:id/status',
  admin,
  controller.updateStatus,
);

export default router;