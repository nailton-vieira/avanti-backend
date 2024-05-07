import prismaClient from "../../prisma";

interface Props {
    id: string;
}

class DeleteLocaisService {

    async execute({id}: Props) {
        const local = await prismaClient.local.delete({where: { id },});
        return local;
    }
}

export { DeleteLocaisService}