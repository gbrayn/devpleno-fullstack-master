import app from './app'
import config from './config'

const port = config.app.PORT || 3333

app.listen(port, err => {
  err
    ? console.error(`❌ Não foi possível iniciar o servidor: ${err}`)
    : console.log(`🚀 Servidor rodando em http://localhost:${port}/`)
})
