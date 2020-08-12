import express from "express";
import ClassesController from "./controllers/ClassesControllers";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControler = new ConnectionsController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.post("/connections", connectionsControler.create);
routes.get("/connections", connectionsControler.index);

export default routes;
