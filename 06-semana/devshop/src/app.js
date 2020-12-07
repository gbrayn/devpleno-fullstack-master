import express from 'express'
import path from 'path'
import routes from './routes'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static('public'))
app.use('/', routes)

export default app
