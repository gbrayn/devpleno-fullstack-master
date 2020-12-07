import _knex from 'knex'
import config from '../config'

const knex = new _knex({
  client: 'mysql2',
  connection: {
    host: config.db.HOST,
    user: config.db.USER,
    password: config.db.PASSWORD,
    database: config.db.DATABASE
  }
})

export default knex
