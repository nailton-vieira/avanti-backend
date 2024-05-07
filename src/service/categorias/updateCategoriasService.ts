import prismaClient from "../../prisma";

interface Props {
    id: string;
    name: string;
    tipo_evento: string;
}

class UpdateCategoriasService {
    async execute({ id, name, tipo_evento }: Props) {
        if (name === "" || tipo_evento === "") {
            throw new Error("Preencha todos os campos!");
        }
        
        const categoria = await prismaClient.categoria.update({
            where: { id },
            data: {
                name,
                tipo_evento,
            },
            select: {
                id: true,
                name: true,
                tipo_evento: true,
            },
        });

        return categoria;
    }
}

export { UpdateCategoriasService };
