import {Request, Response} from "express"
import { CreateLocaisService } from "../../service/locais/createLocaisService"

class createLocaisController {
    async handle(req:Request, res:Response) {
        const {espaco_name, endereco, setor, cidade, estado} = req.body 

        const createLocaisService = new CreateLocaisService();
        try{
            const local = await createLocaisService.execute({espaco_name, endereco, setor, cidade, estado});
            return res.status(201).json(local);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { createLocaisController }