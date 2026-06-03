import Users from './models/Users.js';
import Films from './models/Film.js';
import ShowTimes from './models/Showtime.js';
import Bookings from './models/booking.js';
import Comments from './models/Comment.js';

;(async () => {
  console.log('Running Migration');

  const models = [
    Users,
    Films,
    ShowTimes,
    Bookings,
    Comments
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