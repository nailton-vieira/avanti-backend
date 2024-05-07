import prismaClient from "../../prisma";

interface Props{ id: string; 
                name: string;
                data_evento: string;
                descricao: string;
                categoria_id: string;
                local_id: string; }

class UpdateEventosService { 
    async execute ({ id, name, data_evento, descricao, categoria_id, local_id } :Props) { 
        if (name == "" || data_evento == "" || descricao == "" || categoria_id == "" || local_id == "") {
            throw new Error("Preencha todos os campos");
        }
        const evento = await prismaClient.evento.update({ 
            where:{id}, 
            data:{name, data_evento, descricao, categoria_id, local_id},
            select:{id:true, name:true}})

        return evento;
    }
}

export { UpdateEventosService };
