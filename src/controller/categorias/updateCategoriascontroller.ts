import { Request, Response } from "express";
import { UpdateCategoriasService } from "../../service/categorias/updateCategoriasService";

class UpdateCategoriasController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const {name, tipo_evento } = req.body;

        const updateCategoriasService = new UpdateCategoriasService();
        
        
        try {
            const categoria = await updateCategoriasService.execute({ id, name, tipo_evento });
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
        
    }
}

export { UpdateCategoriasController };
