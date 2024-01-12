import { Router } from "express";
import MainController from "./controllers/MainController";

const routes = new Router();

routes.get("/", MainController.index);
routes.get("/status", MainController.status);
routes.post("/total-elementos", MainController.totalElementos);
routes.post("/ordenacao", MainController.ordenacaoCompleta);
routes.get("/consumir-api", MainController.consumirApi);

  export default routes;
