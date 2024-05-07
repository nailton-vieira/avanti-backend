import { Request, Response } from "express";
import { GetAllEventosService, GetEventosService } from "../../service/eventos/getEventosService";

class GetEventosController {
    async handle(req: Request, res: Response){
        const{id} = req.params;

        const getEventosService = new GetEventosService();
        try{
            const evento = await getEventosService.execute({id});
            return res.status(200).json(evento);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async getAllEventos(req: Request, res: Response){
        
        const getAllEventosService = new GetAllEventosService();
        
        try{
            const eventos = await getAllEventosService.execute();
            return res.status(200).json(eventos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export {GetEventosController}