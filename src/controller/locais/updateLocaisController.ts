import { Request, Response } from "express";
import { UpdateLocaisService } from "../../service/locais/updateLocaisService";

class UpdateLocaisController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const { espaco_name, endereco, setor, cidade, estado } = req.body;

        const updateLocaisService = new UpdateLocaisService();
        
        try{
            const local = await updateLocaisService.execute({ id, espaco_name, endereco, setor, cidade, estado  });
            return res.status(200).json(local);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
        
    }
}

export { UpdateLocaisController };