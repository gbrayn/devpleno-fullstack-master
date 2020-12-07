import express from "express";

import { PublicController, AdminController } from "./controllers";

const router = express.Router();

router.get("/", PublicController.getHome);
router.get("/vaga/:id", PublicController.getVaga);

router.get("/admin", AdminController.getHome);
router.get("/admin/vagas", AdminController.getVagas);
router.get("/admin/vagas/delete/:id", AdminController.deleteVaga);
router
  .route("/admin/vagas/nova")
  .get(AdminController.getNovaVaga)
  .post(AdminController.createVaga);
router
  .route("/admin/vagas/editar/:id")
  .get(AdminController.getEditarVaga)
  .post(AdminController.updateVaga);

router.get("/admin/categorias", AdminController.getCategorias);
router.get("/admin/categorias/delete/:id", AdminController.deleteCategoria);
router
  .route("/admin/categorias/nova")
  .get(AdminController.getNovaCategoria)
  .post(AdminController.createCategoria);
router
  .route("/admin/categorias/editar/:id")
  .get(AdminController.getEditarCategoria)
  .post(AdminController.updateCategoria);

export default router;
