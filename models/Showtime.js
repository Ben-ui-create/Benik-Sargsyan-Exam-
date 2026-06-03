import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

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

export default ShowTime;