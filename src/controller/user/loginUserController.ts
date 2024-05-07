import {Request, Response} from 'express'
import { LoginUserService} from '../../service/user/loginUserService'


class LoginUserController{
    async handle(req: Request, res:Response){
        const {name, password} = req.body

     

        const loginUserService = new LoginUserService()

       const login = await loginUserService.execute({
        name,
        password
       })


       res.json(login)

    }
}


export {LoginUserController}
 




