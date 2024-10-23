const { Body } = require('../../../db/sequelize')
const auth = require('../../../auth/auth')

module.exports = (app) => {
  app.delete('/api/body/:id', auth, (req, res) => {
    Body.findByPk(req.params.id)
      .then(body => {
        if(body === null) {
          const message = `La carrosserie demandée n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return Body.destroy({ where: { id: body.id } })
        .then(_ => {
          const message = `La carrosserie avec l'identifiant n°${body.id} a bien été supprimée.`
          res.json({message, data: body })
        })
      })
      .catch(error => {
        const message = `La carrosserie n'a pas pu être supprimée. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}