import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Comments extends Model {

}

Comments.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },

    filmId: {
      type: DataTypes.BIGINT,
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

export default Comments;