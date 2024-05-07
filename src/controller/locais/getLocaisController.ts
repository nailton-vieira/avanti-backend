import { Request, Response } from "express";
import { GetAllLocaisService, GetLocaisService } from "../../service/locais/getLocaisService";

class GetLocaisController {
    async handle(req: Request, res: Response){
        const{id} = req.params;

        const getLocaisService = new GetLocaisService();
        
        try{
            const local = await getLocaisService.execute({id});
            return res.status(200).json(local);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async getAllLocais(req: Request, res: Response){
        
        const getAllLocaisService = new GetAllLocaisService();
        
        try {
            const locais = await getAllLocaisService.execute();
            return res.status(200).json(locais);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export {GetLocaisController}