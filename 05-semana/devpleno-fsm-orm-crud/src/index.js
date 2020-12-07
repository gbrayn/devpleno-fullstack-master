import app from './app'
import sequelize from './database'
import config from './config'

const { PORT } = config.app

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, err => {
    err
      ? console.error(`Couldn't start the server\n ${err.message}`)
      : console.log(`🚀 Server is running at http://localhost:${PORT}/`)
  })
})
