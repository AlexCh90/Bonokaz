const { Body } = require('../../../db/sequelize')
const { Op } = require('sequelize')
// auth = require('../../../auth/auth')

const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1)

module.exports = (app) => {
  app.get('/bodies', (req, res) => {
    if(req.query.name) {
      const name = req.query.name
      const limit = parseInt(req.query.limit) || 5

      if(name.length < 2) {
        const message = `Le terme de recherche doit contenir au minimum 2 caractères.`
        return res.status(400).json({ message })
      }

      return Body.findAndCountAll({
        where: {
          name: {
            [Op.or]: {
              [Op.like]: `%${name}%`,
              [Op.startsWith]: capitalize(name)
            }
          }
        },
        order: ['name'],
        limit: limit
      })
      .then(({count, rows}) => {
        const message = `Il y a ${count} qui correspondent au terme de recherche ${name}.`
        return res.json({ message, data: rows })
      })
    }
    else {
      Body.findAll({ order: ['name'] })
      .then(bodies => {
        const message = 'La liste des carrosseries a bien été récupérée.'
        res.json({ message, data: bodies })
      })
      .catch(error => {
        const message = `La liste des carrosseries n'a pas pu être récupérée.
                         Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
    }
  })
}