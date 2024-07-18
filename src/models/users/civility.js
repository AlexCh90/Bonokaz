const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('civility', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

          wording: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: {
                msg: 'Ce libellé de civilité existe déjà.'
              },
              validate: {
                notEmpty: { msg: 'Le libellé de civilité ne peut pas être vide.' },
                notNull: { msg: 'Le libellé de civilité est une propriété requise.'}
              }
            },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}