import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';
import ShowTimes from './Showtime.js';
import Comments from './Comment.js';

class Film extends Model {

}

Film.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.TEXT,
    },

    genre: {
      type: DataTypes.STRING,
    },

    duration: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'films',
    tableName: 'films',
    timestamps: true,
  },
);

// Film.hasMany(ShowTimes, {
//   foreignKey: 'filmId',
//   as: 'showtime',
// });
//
// Film.hasMany(Comments, {
//   foreignKey: 'filmId',
//   as: 'comments',
// });


export default Film;