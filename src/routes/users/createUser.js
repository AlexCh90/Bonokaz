const { Body, User} = require('../../db/sequelize')
const bcrypt = require('bcrypt')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const {hash} = require("bcrypt");
//const auth = require('../../../auth/auth')

module.exports = (app) => {
    app.post('/users', (req, res) => {
      bcrypt.hash(req.body.password, 10)
      .then(hash => User.create({
          username: req.body.username,
          password: hash,
          name: req.body.name,
          firstname: req.body.firstname,
          address: req.body.address,
          postcode: req.body.postcode,
          city: req.body.city,
          telephone: req.body.telephone,
          email: req.body.email,
          id_civility: req.body.id_civility,
          id_status: req.body.id_status
      })).catch(error => {
          if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
          }
          const message = `L'utilisateur' n'a pas pu être ajouté. Réessayez dans quelques instants.`
          res.status(500).json({ message, data: error })
        })
    })
}