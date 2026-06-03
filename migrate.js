import Users from './models/Users.js';
import Films from './models/Film.js';
import ShowTime from './models/Showtime.js';
import Bookings from './models/booking.js';
import Comments from './models/Comment.js';

;(async () => {
  console.log('Running Migration');

  const models = [
    Users,
    Films,
    ShowTime,
    Comments,
    Bookings
  ];

  for (const model of models) {
    try {
      console.log('model -> ', model);
      await model.sync({alter: true});
    } catch (e) {
      console.error(e);
    }
  }
})();