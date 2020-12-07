import app from './app'
import config from './config'

app.listen(config.app.PORT, (err) => {
  if (err) {
    console.error(`💥 Couldn't start the server\n ${err}`)
  } else {
    console.log('🌟 Server running at localhost')
  }
})
