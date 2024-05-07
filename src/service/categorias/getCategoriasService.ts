import prismaClient from "../../prisma";

interface Props {
    id: string;
}

class GetCategoriasService {
    
    async execute({id}: Props){
      const categoria = await prismaClient.categoria.findFirst({
        where: {id},
        select: {
            id: true,
            name: true,
            tipo_evento: true,
            created_at: true,
            updated_at: true
        },
      });

      return categoria;
    }
}

export {GetCategoriasService}


class GetAllCategoriasService {

  async execute() {
    const categorias = await prismaClient.categoria.findMany();
    return categorias;
  }
  
}

export{GetAllCategoriasService}
