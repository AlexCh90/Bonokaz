const { Body } = require('../../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../../auth/auth')

module.exports = (app) => {
    app.post('/bodies', auth, (req, res) => {
      Body.create(req.body)
        .then(carbody => {
          const message = `La carrosserie ${req.body.name} a bien été créée.`
          res.json({ message, data: carbody })
        })
        .catch(error => {
          if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
          }
          if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
          }
          const message = `La carrosserie n'a pas pu être ajoutée. Réessayez dans quelques instants.`
          res.status(500).json({ message, data: error })
        })
    })
}