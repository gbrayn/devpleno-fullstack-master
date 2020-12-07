import express from 'express'
import pessoas from './controllers/pessoas'

const router = express.Router()

router.get('/', pessoas.list)
router
  .route('/pessoas/create')
  .get((req, res) => {
    res.render('pessoas/create')
  })
  .post(pessoas.createOne)

router
  .route('/pessoas/update/:id')
  .get(pessoas.renderUpdate)
  .post(pessoas.updateOne)

router.get('/pessoas/delete/:id', pessoas.deleteOne)

export default router
