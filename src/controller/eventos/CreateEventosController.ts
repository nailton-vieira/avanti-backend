import { Request, Response, json } from 'express'
import { CreateEventoService } from '../../service/eventos/createEventosSevice'

class CreateEventoController {

    async handle(req: Request, res: Response) {

        const { name, data_evento, descricao, categoria_id, local_id } = req.body

        const createEventoService = new CreateEventoService();

        try {
            const evento = await createEventoService.execute({name, data_evento, descricao, categoria_id, local_id});
            return res.status(201).json(evento);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }
}



export { CreateEventoController }
