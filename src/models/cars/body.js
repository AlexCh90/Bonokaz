const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('body', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          
          name: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: {
                msg: 'Ce type de carrosserie existe déjà.'
              },
              validate: {
                len: {
                  args: [1, 25],
                  msg: 'Le type de carrosserie doit contenir entre 1 et 25 caractères.'
                },
                notEmpty: { msg: 'Le type de carrosserie ne peut pas être vide.' },
                notNull: { msg: 'Le type de carrosserie est une propriété requise.'}
              }
            },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}