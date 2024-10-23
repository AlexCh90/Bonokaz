const { Sequelize, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const BodyModel = require('../models/cars/body')
const bodies = require('./mock-bodies')
const BrandModel = require('../models/cars/brand')
const CarModel = require('../models/cars/car')
const ColorModel = require('../models/cars/color')
const EnergyModel = require('../models/cars/energy')
const GearboxModel = require('../models/cars/gearbox')
const ModelModel = require('../models/cars/model')

const SellerModel = require('../models/sellers/seller')

const CivilityModel = require('../models/users/civility')
const StatusModel = require('../models/users/status')
const UserModel = require('../models/users/user')

let sequelize

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize('kk8u5y871hfoaw9y', 't09tvm6qofrtvc7h', 'ryujse9ftf40wpqn', {
    host: 'klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
} else {
  sequelize = new Sequelize('bonokaz', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
  
}

const Body = BodyModel(sequelize, DataTypes)
const Brand = BrandModel(sequelize, DataTypes)
const Car = CarModel(sequelize, DataTypes)
const Color = ColorModel(sequelize, DataTypes)
const Energy = EnergyModel(sequelize, DataTypes)
const Gearbox = GearboxModel(sequelize, DataTypes)
const Model = ModelModel(sequelize, DataTypes)

const Seller = SellerModel(sequelize, DataTypes)

const Civility = CivilityModel(sequelize, DataTypes)
const Status = StatusModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync().then(_ => {
      bodies.map(body => {
        Body.create({
          name: body.name
        })
        .then(body => console.log(body.toJSON()))
      })

      console.log("La base de données à bien été instanciée")
  })
}

module.exports = { 
  Body, Brand, Car, Color, Energy, Gearbox, Model, Seller, Civility, Status, User
}