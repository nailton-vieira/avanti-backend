import { Request, Response } from "express";
import { DeleteLocaisService } from "../../service/locais/deleteLocaisService";

class DeleteLocaisController {
    async handle(req: Request, res: Response){
        const {id} = req.params;

        const deleteLocaisService = new DeleteLocaisService();

        try{
            await deleteLocaisService.execute({id});
            return res.status(204).send({message: "Evento Deletado!"});
        } catch (error) {
            return res.status(404).json({error: "Evento não encontrado"});
        }
    }
}

export { DeleteLocaisController}