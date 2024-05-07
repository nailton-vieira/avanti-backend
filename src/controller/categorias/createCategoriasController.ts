import {Request, Response, json} from "express"
import { CreateCategoriasService } from '../../service/categorias/createCategoriasService' 

class CreateCategoriasController {
    async handle(req: Request, res:Response) {
        const {name, tipo_evento} = req.body

        const createCategoriasService = new CreateCategoriasService();

        try {
            const categoria = await createCategoriasService.execute({ name, tipo_evento });
            return res.status(201).json(categoria);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export {CreateCategoriasController}

