import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface loginRequest {
    name: string
    password: string
}

class LoginUserService {
    async execute({ name, password }: loginRequest) {

        // verifica se o usuario e senha foram preenchidos.
        if (name == "" || password == "") {
            throw new Error("Preencha todos os campos!")
        }


        //verifica se o usuario existe no banco.
        const userExistente = await prismaClient.user.findFirst({
            where: {
                name: name
            }
        })

        if (!userExistente) {
            throw new Error("Usuario/senha não existente!")
        }

        // verifica se a senha esta correta.
        const passwordCorret = await compare(password, userExistente.password)

        if(!passwordCorret){
            throw new Error("Usuario/senha não existente!")
        }


        // gerar o token JWT
        const tokken = sign(
            {
            name: userExistente.name,
           },
           process.env.JWT_SECRET, 
           {
            subject: userExistente.id,
            expiresIn: '30d'
           }

    )




        return {
            id: userExistente.id,
            name: userExistente.name,
            tokken: tokken
        }


    }
}




export { LoginUserService }