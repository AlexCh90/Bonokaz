const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('car', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
          
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'année' ne peut pas être vide." },
                notNull: { msg: "L'année est une propriété requise."}
            }
        },
            
        mileage:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le kilométrage ne peut pas être vide." },
                notNull: { msg: "Le kilométrage est une propriété requise."}
            }
        },
            
        power: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La puissance ne peut pas être vide." },
                notNull: { msg: "La puissance est une propriété requise."}
            }
        },
            
        torque: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le couple ne peut pas être vide." },
                notNull: { msg: "Le couple est une propriété requise."}
            }
        },
            
        description:{
            type: DataTypes.TEXT('long'),
            allowNull: false,
            validate: {
                len: {
                    args: [50, 5000],
                    msg: 'Le nom de la couleur doit contenir entre 50 et 5000 caractères.'
                },
                notEmpty: { msg: 'La description ne peut pas être vide.' },
                notNull: { msg: 'La description est une propriété requise.'}
            }
        },
            
        id_brand: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La marque ne peut pas être vide." },
                notNull: { msg: "La marque est une propriété requise."}
            }
        },

        id_model: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le modèle ne peut pas être vide." },
                notNull: { msg: "Le modèle est une propriété requise."}
            }
        },

        id_color: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La couleur ne peut pas être vide." },
                notNull: { msg: "La couleurs est une propriété requise."}
            }
        },

        id_energy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'énergie ne peut pas être vide." },
                notNull: { msg: "L'énergie est une propriété requise."}
            }
        },

        id_gearbox: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La boîte de vitesses ne peut pas être vide." },
                notNull: { msg: "La boîte de vitesses est une propriété requise."}
            }
        },

        id_body: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La carrosserie ne peut pas être vide." },
                notNull: { msg: "La carrosserie de vitesses est une propriété requise."}
            }
        },

        id_seller: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le vendeur ne peut pas être vide." },
                notNull: { msg: "Le vendeur est une propriété requise."}
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}