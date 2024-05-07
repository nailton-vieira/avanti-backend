import {Router, Request, Response, NextFunction} from 'express'

// Users
import { CreateUserController } from './controller/user/controllerUser';
import { LoginUserController } from './controller/user/loginUserController';


// Categorias
import { CreateCategoriasController} from './controller/categorias/createCategoriasController';
import { UpdateCategoriasController } from './controller/categorias/updateCategoriascontroller';
import { DeleteCategoriasController } from './controller/categorias/deleteCategoriasController';
import { GetCategoriasController } from './controller/categorias/getCategoriasController';

// Eventos
import { CreateEventoController } from "./controller/eventos/CreateEventosController";
import { UpdateEventosController } from './controller/eventos/updateEventosController';
import { GetEventosController } from './controller/eventos/getEventosController';
import { DeleteEventosController } from './controller/eventos/deleteEventosController';

// Locais
import { createLocaisController } from './controller/locais/createLocaisController';
import { UpdateLocaisController } from './controller/locais/updateLocaisController';
import { GetLocaisController } from './controller/locais/getLocaisController';
import { DeleteLocaisController } from './controller/locais/deleteLocaisController';

import {isAuthen} from "./middlewares/isAuthen"


const router = Router();

// Users
router.post("/users",new CreateUserController().handle)
router.post("/login", new LoginUserController().handle)

router.post("/login", new LoginUserController().handle )
router.post("/evento", new CreateEventoController().handle )




// Categorias
router.get("/categorias", new GetCategoriasController().getAllCategorias)
router.get("/categorias/:id", new GetCategoriasController().handle)
router.post("/categorias", isAuthen, new CreateCategoriasController().handle)
router.put("/categorias/:id", isAuthen, new UpdateCategoriasController().handle)
router.delete("/categorias/:id", isAuthen, new DeleteCategoriasController().handle)

// Eventos
router.get("/eventos", new GetEventosController().getAllEventos)
router.get("/eventos/:id", new GetEventosController().handle)
router.post("/eventos", isAuthen,  new CreateEventoController().handle)
router.put("/eventos/:id", isAuthen, new UpdateEventosController().handle)
router.delete("/eventos/:id", isAuthen, new DeleteEventosController().handle)

//Locais
router.get("/locais", new GetLocaisController().getAllLocais)
router.get("/locais/:id", new GetLocaisController().handle)
router.post("/locais", isAuthen, new createLocaisController().handle)
router.put("/locais/:id", isAuthen, new UpdateLocaisController().handle)
router.delete("/locais/:id", isAuthen, new DeleteLocaisController().handle)

export default router