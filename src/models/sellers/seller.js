const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('seller', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STING,
            allowNull: false,
            unique: {
                msg: "Ce nom d'utilisateur est déjà pris."
            },
            validate: {
                len: {
                    args: [8,30],
                    msg: "Le nom d'utilisateur doit contenir entre 8 et 30 caractères."
                },
                notEmpty:{
                    msg: "Le nom d'utilisateur ne peut être vide."
                },
                notNull: {
                    msg: "Le nom d'utilisateurt est une propriété requise."
                }
            }
        },

        password: {
          type: DataTypes.STING
        },

        name:{
            type: DataTypes.STING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    msg: "La raison sociale doit contenir entre 1 et 50 caractères."
                },
                notEmpty: {
                    msg: "La raison sociale ne peut être vide."
                },
                notNull: {
                    msg: "La raison sociale est une propriété requise."
                }
            }
        },

        siren: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: {
                msg: "Ce numéro SIREN existe déjà."
            },
            validate: {
            len: {
                args: [9],
                    msg: "Le numéro SIREN doit être composé de 9 chiffres."
                },
                notEmpty: {
                    msg: "le numéro SIREN ne peut être vide."
                },
                notNull: {
                    msg: "Le numéro SIREN est une propriété requise."
                }
            }
        },

        siret: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: {
                msg: "Ce numéro SIRET existe déjà."
            },
            validate: {
                len: {
                    args: [14],
                    msg: "Le numéro SIRET doit contenir 14 chiffres."
                },
                notEmpty: {
                    msg: "Le numéro SIRET ne doit pas être vide."
                },
                notNull: {
                    msg: "Le numéro SIRET est une propriété requise."
                }
            }
        },

        adress: {
            type: DataTypes.STING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "L'adresse ne peut être vide."
                },
                notNull: {
                    msg: "L'adresse est une propriété requise"
                }
            }
        },

        postcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [5],
                    msg: "Le code postal doit être composé de 5 chiffres"
                },
                notEmpty: {
                    msg: "Le code postal ne peut être vide."
                },
                notNull: {
                    msg: "Le code postal est une propriété requise"
                }
            }
        },

        municipality: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "La commune ne peut être vide."
                },
                notNull: {
                    msg: "La commune est une propriété requise"
                }
            }
        }
    })
}