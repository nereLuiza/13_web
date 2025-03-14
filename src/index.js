//index.js
import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import cors from "cors";

const cors = require('cors');
app.use(cors({ origin: '*' }));

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(roteadorLogin);
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Luíza Nere",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});