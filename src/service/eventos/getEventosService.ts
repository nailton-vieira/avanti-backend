import prismaClient from "../../prisma";

interface Props {
    id: string;
}

class GetEventosService {
    
    async execute({id}: Props){
      const evento = await prismaClient.evento.findFirst({
        where: {id},
        select: {
            id: true,
            name: true,
            data_evento: true,
            descricao: true,
            created_at: true,
            updated_at: true,
            categoria_id: true,
            local_id: true
        },
      });

      return evento;
    }
}

export {GetEventosService}


class GetAllEventosService {

  async execute() {
    const eventos = await prismaClient.evento.findMany();
    return eventos;
  }
  
}

export{GetAllEventosService}
