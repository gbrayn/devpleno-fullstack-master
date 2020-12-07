import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DATABASE } = process.env

export default {
  app: {
    PORT
  },
  database: {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    NAME: DATABASE
  }
}
