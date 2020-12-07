import dbConnection from "../../database";

class PublicController {
  async getHome(req, res) {
    try {
      const db = await dbConnection;

      const categoriasDb = await db.all("select * from categorias;");
      const vagas = await db.all("select * from vagas");

      const categorias = categoriasDb.map(categoria => {
        return {
          ...categoria,
          vagas: vagas.filter(vaga => vaga.categoria === categoria.id)
        };
      });

      res.render("home", {
        categorias,
        vagas
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getVaga(req, res) {
    try {
      const db = await dbConnection;

      const { id } = req.params;

      const vaga = await db.get(`select * from vagas where id='${id}'`);
      const categoria = await db.get(
        `select * from categorias where id='${vaga.categoria}'`
      );

      res.render("vaga", { vaga, categoria });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PublicController();
