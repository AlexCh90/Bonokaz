const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('status', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

          wording: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: {
                msg: 'Ce libellé de statut existe déjà.'
              },
              validate: {
                notEmpty: { msg: 'Le libellé de statut ne peut pas être vide.' },
                notNull: { msg: 'Le libellé de statut est une propriété requise.'}
              }
            },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}