import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';
import Users from './Users.js';
import Films from "./Film.js";

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

// Comments.belongsTo(Users, {
//   foreignKey: 'userId',
//   as: 'users',
// });
//
// Comments.belongsTo(Films, {
//   foreignKey: 'filmId',
//   as: 'films',
// });


export default Comments;