import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

import Users from './Users.js';
import ShowTimes from './Showtime.js';

class Bookings extends Model {

}

Bookings.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },

    showTimeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    seats: {
      type: DataTypes.STRING,
    },

    totalPrice: {
      type: DataTypes.DECIMAL,
    },

    bookingReferance: {
      type: DataTypes.STRING,
    },

    bookingDate: {
      type: DataTypes.DATE,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'cancelled',
    }
  },
  {
    sequelize: db,
    modelName: 'bookings',
    tableName: 'bookings',
    timestamps: true,
  },
);

// Bookings.belongsTo(Users, {
//   foreignKey: 'userId',
//   as: 'users',
// });
//
// Bookings.belongsTo(ShowTimes, {
//   foreignKey: 'showtimeId',
//   as: 'showtime',
// });


export default Bookings;