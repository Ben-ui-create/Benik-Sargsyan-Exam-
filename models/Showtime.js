import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';
import Films from "./Film.js";
import Bookings from "./booking.js";

class ShowTime extends Model {

}

ShowTime.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    filmId: {
      type: DataTypes.BIGINT,
    },

    showDate: {
      type: DataTypes.DATEONLY,
    },

    showTime: {
      type: DataTypes.TIME,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
    }
  },
  {
    sequelize: db,
    modelName: 'showTimes',
    tableName: 'showtime',
    timestamps: true,
  },
);

// ShowTime.belongsTo(Films, {
//   foreignKey: 'filmId',
//   as: 'films',
// });
//
// ShowTime.hasMany(Bookings, {
//   foreignKey: 'showtimeId',
//   as: 'bookings',
// });


export default ShowTime;