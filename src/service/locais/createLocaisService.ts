import prismaClient from "../../prisma";

interface Props{
    espaco_name: string;
    endereco: string;
    setor: string;
    cidade: string;
    estado: string;
    
}

class CreateLocaisService {
    async execute ({
        espaco_name,
        endereco,
        setor,
        cidade,
        estado
    }:Props){
        if (espaco_name == "" || endereco == "" || setor == "" || cidade == "" || estado == "") {
            throw new Error("preencha todos os campos!")
        }
        const locais = await prismaClient.local.create({
            data: {
                espaco_name: espaco_name,
                endereco: endereco,
                setor: setor,
                cidade: cidade,
                estado: estado
            }, 
            select: {
                id: true,
                espaco_name: true,
            }
        })
        return locais
    }
}

export {CreateLocaisService}