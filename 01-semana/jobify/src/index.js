import express from "express";
import path from "path";

import auth from "./middlewares/auth";
import routes from "./routes";

const app = express();

const port = process.env.PORT || 3000;

app.use("/admin", auth);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/", routes);

app.listen(port, error => {
  error
    ? console.log("> Não foi possível iniciar o servidor.")
    : console.log(`> Servidor rodando em http://localhost:${port}`);
});
