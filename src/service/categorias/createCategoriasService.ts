import prismaClient from "../../prisma";

interface Props {
    name: string;
    tipo_evento: string;
}

class CreateCategoriasService{
    async execute ({name, tipo_evento}: Props) {
        if(name == "" || tipo_evento == ""){
            throw new Error("Preencha todos os campos!")
        }
        const categoria = await prismaClient.categoria.create({
            data: {
                name: name,
                tipo_evento: tipo_evento,
            },
            select: {
                id: true,
                name: true,
                tipo_evento: true
            }

        })
        return categoria;
    }
}

export {CreateCategoriasService}

