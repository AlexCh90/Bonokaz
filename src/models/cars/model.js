const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('model', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
          
        id_brand: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'La marque ne peut pas être vide.' },
                notNull: { msg: 'La marque est une propriété requise.'}
            }
        },
            
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Ce modèle existe déjà.'
            },
            validate: {
                len: {
                    args: [1, 25],
                    msg: 'Le nom du modèle doit contenir entre 1 et 25 caractères.'
                },
                notEmpty: { msg: 'Le nom du modèle ne peut pas être vide.' },
                notNull: { msg: 'Le nom du modèle est une propriété requise.'}
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}