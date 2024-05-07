import prismaClient from "../../prisma";

interface Props {
    id: string;
}

class GetLocaisService {
    
    async execute({id}: Props){
      const local = await prismaClient.local.findFirst({
        where: {id},
        select: {
            id: true,
            espaco_name: true,
            endereco: true,
            setor: true,
            cidade: true,
            estado: true,
            created_at: true,
            updated_at: true
        },
      });

      return local;
    }
}

export {GetLocaisService}


class GetAllLocaisService {

  async execute() {
    const locais = await prismaClient.local.findMany();
    return locais;
  }
  
}

export{GetAllLocaisService}
