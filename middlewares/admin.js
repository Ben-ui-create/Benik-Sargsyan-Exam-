import HttpErrors from "http-errors";
import Users from '../models/Users.js';

export default (req, res, next) => {
  try {
    console.log(req.session.user.role);

    if (req.session.user.role !== 'admin') {
      throw new HttpErrors(403, {
        errors: {
          message: 'You are not admin',
        },
      });
    }

    next();
  } catch (e) {
    console.error(e);
    next(e);
  }
}