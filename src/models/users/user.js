const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('civility', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

          username: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: {
                msg: "Ce nom d'utilisateur existe déjà."
              },
              validate: {
                len: {
                  args: [1, 25],
                  msg: "Le nom d'utilisateur doit contenir entre 1 et 25 caractères."
                },
                notEmpty: { msg: "Le nom d'utilisateur ne peut pas être vide." },
                notNull: { msg: "Le nom d'utilisateur est une propriété requise."}
              }
          },

          
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}