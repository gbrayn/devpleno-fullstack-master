import express from "express";
import path from "path";
import routes from "./routes";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

export default app;
