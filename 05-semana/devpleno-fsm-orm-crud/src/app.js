import express from 'express'
import path from 'path'
import router from './routes/pessoas'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/pessoas', router)

export default app
