import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

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

    filmId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    rating: {
      type: DataTypes.BIGINT,
    },

    commentText: {
      type: DataTypes.TEXT,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
  },
  {
    sequelize: db,
    modelName: 'comments',
    tableName: 'comments',
    timestamps: true,
  },
);


export default Bookings;