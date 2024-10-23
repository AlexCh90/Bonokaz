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

//        password: {
//          //
//        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le nom ne peut pas être vide." },
                notNull: { msg: "Le nom est une propriété requise."}
            }
        },

        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le prénom ne peut pas être vide." },
                notNull: { msg: "Le prénom est une propriété requise."}
            }
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'adresse ne peut pas être vide." },
                notNull: { msg: "L'adresse est une propriété requise."}
            }
        },

        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le code postal ne peut pas être vide." },
                notNull: { msg: "Le code postal est une propriété requise."}
            }
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La commune ne peut pas être vide." },
                notNull: { msg: "La commune est une propriété requise."}
            }
        },

        telephone: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            validate: {
                len: {
                    args: [10],
                    msg: "Le nom d'utilisateur doit contenir entre 1 et 25 caractères."
                },
                    notEmpty: { msg: "L'adresse ne peut pas être vide." },
                    notNull: { msg: "L'adresse est une propriété requise."}
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: { msg: "La commune ne peut pas être vide." },
                notNull: { msg: "La commune est une propriété requise."}
            }
        },

        id_civility: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La civilité ne peut pas être vide." },
                notNull: { msg: "La civilité est une propriété requise."}
            }
        },

        id_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le statut ne peut pas être vide." },
                notNull: { msg: "Le statut est une propriété requise."}
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
      })
}