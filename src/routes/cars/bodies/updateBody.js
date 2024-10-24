const { Body } = require('../../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
//const auth = require('../../../auth/auth')

module.exports = (app) => {
  app.put('/bodies/:id', (req, res) => {
    const id = req.params.id
    Body.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Body.findByPk(id).then(body => {
        if(body === null) {
          const message = `La carrosserie demandée n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = `La carrosserie ${body.name} a bien été modifiée.`
        res.json({message, data: body })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `La carrosserie n'a pas pu être modifiée. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}