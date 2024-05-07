import { Request, Response } from "express";
import { UpdateEventosService } from "../../service/eventos/updateEventosService";

class UpdateEventosController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const { name, data_evento, descricao, categoria_id, local_id} = req.body;

        const updateEventosService = new UpdateEventosService();
        
        try {
            const evento = await updateEventosService.execute({ id, name, data_evento, descricao, categoria_id, local_id});
            return res.status(200).json(evento);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
        
    }
}

export { UpdateEventosController };