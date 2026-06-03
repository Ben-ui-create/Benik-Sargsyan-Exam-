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
  as: 'films',
});

Users.hasMany(Bookings, {
  foreignKey: 'userId',
  as: 'bookings',
});

Bookings.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'users',
});

ShowTimes.hasMany(Bookings, {
  foreignKey: 'showtimeId',
  as: 'bookings',
});

Bookings.belongsTo(ShowTimes, {
  foreignKey: 'showtimeId',
  as: 'showtime',
});

Users.hasMany(Comments, {
  foreignKey: 'userId',
  as: 'comments',
});

Comments.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'users',
});

Films.hasMany(Comments, {
  foreignKey: 'filmId',
  as: 'comments',
});

Comments.belongsTo(Films, {
  foreignKey: 'filmId',
  as: 'films',
});
