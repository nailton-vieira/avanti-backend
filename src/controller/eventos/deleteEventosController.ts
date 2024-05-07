import { Request, Response } from "express";
import { DeleteEventosService } from "../../service/eventos/deleteEventosService";

class DeleteEventosController {
    async handle(req: Request, res: Response){
        const {id} = req.params;

        const deleteEventosService = new DeleteEventosService();
        try {
            await deleteEventosService.execute({id});
            return res.status(204).send({message: "Evento Deletado!"});
        } catch (error) {
            return res.status(404).json({error: "Evento não encontrado"});
        }
    }
}

export { DeleteEventosController}