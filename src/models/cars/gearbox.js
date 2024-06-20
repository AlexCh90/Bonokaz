const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('gearbox', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          
          name: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: {
                msg: 'Cette boîte de vitesses existe déjà.'
              },
              validate: {
                len: {
                  args: [1, 25],
                  msg: 'Le nom de la boîte de vitesses doit contenir entre 1 et 25 caractères.'
                },
                notEmpty: { msg: 'Le nom de la boîte de vitesses ne peut pas être vide.' },
                notNull: { msg: 'Le nom de la boîte de vitesses est une propriété requise.'}
              }
            },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}