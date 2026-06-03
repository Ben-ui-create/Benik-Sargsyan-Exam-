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
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    duration: {
      type: DataTypes.BIGINT,
      allowNull: false,
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