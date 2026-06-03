import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

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


export default Film;