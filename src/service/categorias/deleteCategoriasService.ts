import prismaClient from "../../prisma";

interface Props {
    id: string;
}

class DeleteCategoriasService {

    async execute({id}: Props) {
        const categoria = await prismaClient.categoria.delete({where: { id },});
        return categoria;
    }
}

export { DeleteCategoriasService}