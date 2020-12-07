import dbConnection from "../../database";

class AdminController {
  async getHome(req, res) {
    try {
      res.render("admin/home");
    } catch (error) {
      console.log(error);
    }
  }

  async getVagas(req, res) {
    try {
      const db = await dbConnection;
      const vagas = await db.all("select * from vagas;");

      res.render("admin/vagas", { vagas });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteVaga(req, res) {
    try {
      const db = await dbConnection;
      const { id } = req.params;

      await db.run(`delete from vagas where id='${id}'`);

      res.redirect("/admin/vagas");
    } catch (error) {
      console.log(error);
    }
  }

  async getNovaVaga(req, res) {
    try {
      const db = await dbConnection;
      const categorias = await db.all("select * from categorias");

      res.render("admin/nova-vaga", { categorias });
    } catch (error) {
      console.log(error);
    }
  }

  async createVaga(req, res) {
    try {
      const db = await dbConnection;

      const { categoria, titulo, descricao } = req.body;

      await db.run(
        `insert into vagas(categoria, titulo, descricao) values(${categoria}, '${titulo}', '${descricao}');`
      );

      res.redirect("/admin/vagas");
    } catch (error) {
      console.log(error);
    }
  }

  async getEditarVaga(req, res) {
    try {
      const db = await dbConnection;
      const { id } = req.params;

      const categorias = await db.all("select * from categorias");
      const vaga = await db.get(`select * from vagas where id='${id}'`);

      res.render("admin/editar-vaga", { categorias, vaga });
    } catch (error) {
      console.log(error);
    }
  }

  async updateVaga(req, res) {
    try {
      const db = await dbConnection;

      const { categoria, titulo, descricao } = req.body;
      const { id } = req.params;

      await db.run(
        `UPDATE vagas SET categoria = '${categoria}', titulo = '${titulo}', descricao = '${descricao}' WHERE id = ${id};';`
      );

      res.redirect("/admin/vagas");
    } catch (error) {
      console.log(error);
    }
  }

  async getCategorias(req, res) {
    try {
      const db = await dbConnection;
      const categorias = await db.all("select * from categorias;");

      res.render("admin/categorias", { categorias });
    } catch (error) {
      console.log(error);
    }
  }

  async getNovaCategoria(req, res) {
    try {
      res.render("admin/nova-categoria");
    } catch (error) {
      console.log(error);
    }
  }

  async createCategoria(req, res) {
    try {
      const db = await dbConnection;

      const { titulo } = req.body;

      await db.run(`insert into categorias(categoria) values('${titulo}');`);

      res.redirect("/admin/categorias");
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCategoria(req, res) {
    try {
      const db = await dbConnection;
      const { id } = req.params;

      await db.run(`delete from categorias where id='${id}'`);

      res.redirect("/admin/categorias");
    } catch (error) {
      console.log(error);
    }
  }

  async getEditarCategoria(req, res) {
    try {
      const db = await dbConnection;

      const { id } = req.params;

      const categoria = await db.get(`SELECT * FROM categorias WHERE id=${id}`);

      res.render("admin/editar-categoria", { categoria });
    } catch (error) {
      console.log(error);
    }
  }

  async updateCategoria(req, res) {
    try {
      const db = await dbConnection;
      const { titulo } = req.body;
      const { id } = req.params;

      await db.run(
        `UPDATE categorias SET categoria='${titulo}' WHERE id=${id}`
      );

      res.redirect("/admin/categorias");
    } catch (error) {}
  }
}

export default new AdminController();
