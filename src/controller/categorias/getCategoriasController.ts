import { Request, Response } from "express";
import { GetAllCategoriasService, GetCategoriasService } from "../../service/categorias/getCategoriasService";

class GetCategoriasController {
    async handle(req: Request, res: Response){
        const{id} = req.params;

        const getCategoriasService = new GetCategoriasService();

        try {
            const categoria = await getCategoriasService.execute({ id });
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async getAllCategorias(req: Request, res: Response){

        const getAllCategoriasService = new GetAllCategoriasService();

        try {
            const categorias = await getAllCategoriasService.execute();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export {GetCategoriasController}