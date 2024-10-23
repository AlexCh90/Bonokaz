const { Body } = require('../../../db/sequelize')
//const auth = require('../../../auth/auth')

module.exports = (app) => {
  app.get('/bodies/:id', (req, res) => {
    Body.findByPk(req.params.id)
      .then(body => {
        if(body === null) {
          const message = `La carrosserie demandée n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Une carrosserie a bien été trouvée.'
        res.json({ message, data: body })
      })
      .catch(error => {
        const message = `La carrosserie n'a pas pu être récupérée. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}