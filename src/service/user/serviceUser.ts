import prismaClient from "../../prisma";
import { decodeBase64, hash } from "bcryptjs";

interface Props {
    name: string;
    password: string;
    perfil: string;
}

class CreateUserService {
    async execute({ name, password, perfil }: Props) {

        // verificação se algum campo foi preenchido.
        if (name == "" || password == "" || perfil == "") {
            throw new Error("preencha todos os campos!")
        }


        //verifica se o usuario já existe no banco.
        const userExistente = await prismaClient.user.findFirst({
            where: {
                name: name
            }
        })

        if (userExistente) {
            throw new Error("Usuario já cadastrado!")
        }

        // criptografa a senha
        
        const passwordHash = await hash(password, 8)



        
        //cadastra no banco.
        const user = prismaClient.user.create({
            data: {
                name: name,
                password: passwordHash,
                perfil: perfil
            },
            select: {
                id: true,
                name: true,
                perfil: true
            }
        })

        return user;




    }
}


export { CreateUserService }