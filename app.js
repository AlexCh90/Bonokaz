const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// On gère les routes 404.
//app.use(({res}) => {
//  const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
//	res.status(404).json({message});
//});

app.get('/', (req, res) => {
    res.json('Pouet')
  })

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))