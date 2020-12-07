import express from 'express';
import pessoas from './controllers/pessoas';

const router = express.Router();

router.get('/pessoas', pessoas.list);
router.get('/pessoas/delete/:id', pessoas.destroy);
router
  .route('/pessoas/create')
  .get(pessoas.renderForm)
  .post(pessoas.create);

router
  .route('/pessoas/update/:id')
  .get(pessoas.renderUpdateForm)
  .post(pessoas.update);

export default router;
