import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

//GET: Buscar ou listar uma informação
//Post:Criar alguma nova informação
//Put: Atualizar uma informação existente
//Delete: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

app.use(routes);

app.listen(3333);
