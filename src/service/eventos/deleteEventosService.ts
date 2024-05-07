import prismaClient from "../../prisma";

interface Props {
    id: string;
}

class DeleteEventosService {

    async execute({id}: Props) {
        const evento = await prismaClient.evento.delete({where: { id },});
        return evento;
    }
}

export { DeleteEventosService}