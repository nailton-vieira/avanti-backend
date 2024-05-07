import { Request, Response } from "express";
import { DeleteCategoriasService } from "../../service/categorias/deleteCategoriasService";

class DeleteCategoriasController {
    async handle(req: Request, res: Response){
        const {id} = req.params;

        const deleteCategoriasService = new DeleteCategoriasService();

        try{
            await deleteCategoriasService.execute({id});
            return res.status(204).send({message: "Evento Deletado!"});
        } catch (error) {
            return res.status(404).json({error: "Evento não encontrado"});
        }
    }
}

export { DeleteCategoriasController}