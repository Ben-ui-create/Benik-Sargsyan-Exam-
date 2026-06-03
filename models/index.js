export {default as Users} from './Users.js';
export {default as Films} from './Film.js';
export {default as Bookings} from './booking.js';
export {default as ShowTime} from './Showtime.js';
export {default as Comments} from './Comment.js';

import Users from './Users.js';
import Films from './Film.js';
import ShowTimes from './Showtime.js';
import Bookings from './booking.js';
import Comments from './Comment.js';

Films.hasMany(ShowTimes, {
  foreignKey: 'filmId',
  as: 'showtime',
});

ShowTimes.belongsTo(Films, {
  foreignKey: 'filmId',
  as: 'film',
});

Users.hasMany(Bookings, {
  foreignKey: 'userId',
  as: 'bookings',
});

Bookings.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

ShowTimes.hasMany(Bookings, {
  foreignKey: 'showTimeId',
  as: 'bookings',
});

Bookings.belongsTo(ShowTimes, {
  foreignKey: 'showTimeId',
  as: 'showtime',
});

Users.hasMany(Comments, {
  foreignKey: 'userId',
  as: 'comments',
});

Comments.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Films.hasMany(Comments, {
  foreignKey: 'filmId',
  as: 'comments',
});

Comments.belongsTo(Films, {
  foreignKey: 'filmId',
  as: 'film',
});
