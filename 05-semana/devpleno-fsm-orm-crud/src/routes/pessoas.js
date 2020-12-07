import express from 'express'
import pessoasController from '../controllers/pessoa'
import model from '../models'

const router = express.Router()

router.get('/', pessoasController.index.bind(null, model))
router.post('/create', pessoasController.createProcess.bind(null, model))
router.get('/create', pessoasController.createForm)
router.get('/update/:id', pessoasController.updateForm.bind(null, model))
router.post('/update/:id', pessoasController.updateProcess.bind(null, model))

export default router
