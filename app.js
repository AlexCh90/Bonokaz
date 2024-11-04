const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
sequelize.initDb()

app.get('/', (req, res) => {
  res.json('Pouet')
})

require('./src/routes/cars/bodies/createBody')(app)
require('./src/routes/cars/bodies/deleteBody')(app)
require('./src/routes/cars/bodies/findAllBodies')(app)
require('./src/routes/cars/bodies/findBodyById')(app)
require('./src/routes/cars/bodies/updateBody')(app)

require('./src/routes/users/createUser')(app)
require('./src/routes/users/login')(app)


//On gère les routes 404.
app.use(({res}) => {
  const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
	res.status(404).json({message});
});

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))