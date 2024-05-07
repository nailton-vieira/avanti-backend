import { Request, Response, json } from 'express'
import { CreateUserService } from '../../service/user/serviceUser'

class CreateUserController {

    async handle(req: Request, res: Response) {

        const { name, password, perfil } = req.body

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            password,
            perfil
        });

        return res.json(user)
    }
}


export { CreateUserController }
