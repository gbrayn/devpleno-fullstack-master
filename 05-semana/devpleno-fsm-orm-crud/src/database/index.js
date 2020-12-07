import Sequelize from 'sequelize'
import config from '../config'

const sequelize = new Sequelize(
  config.database.NAME,
  config.database.USER,
  config.database.PASSWORD,
  {
    dialect: 'mysql',
    host: config.database.HOST
  }
)

export default sequelize
