import express from "express";
import { convert, toMoney } from "./lib/convert";
import api from "./apis/bcb";

const router = express.Router();

router.get("/", async (req, res) => {
  const cotacao = await api.getCotacao();
  return res.render("pages/home", { cotacao });
});

router.get("/cotacao", (req, res) => {
  const { cotacao, quantidade } = req.query;

  if (cotacao && quantidade) {
    const conversao = convert(cotacao, quantidade);

    res.render("pages/cotacao", {
      error: false,
      cotacao: toMoney(cotacao),
      quantidade: toMoney(quantidade),
      conversao: toMoney(conversao)
    });
  } else {
    res.render("pages/cotacao", {
      error: "Valores inválidos."
    });
  }
});

export default router;
