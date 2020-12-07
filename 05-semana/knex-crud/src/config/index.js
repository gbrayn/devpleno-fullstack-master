import dotenv from 'dotenv'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

const {
  PORT,
  DB_HOST: HOST,
  DB_USER: USER,
  DB_PASSWORD: PASSWORD,
  DATABASE
} = process.env

export default {
  app: {
    PORT
  },
  db: {
    HOST,
    USER,
    PASSWORD,
    DATABASE
  }
}
