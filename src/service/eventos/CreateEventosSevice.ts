import prismaClient from "../../prisma";

interface Props {
    name: string;
    data_evento: Date;
    descricao: string;
    categoria_id: string;
    local_id: string;
 
   
}

class CreateEventoService {
    async execute({ name, data_evento, descricao, categoria_id, local_id }: Props) {

        // verificação se algum campo foi preenchido.
        if (name == "" || data_evento == null || descricao == "" ) {
            throw new Error("preencha todos os campos!")
        }

        //verifica se o usuario já existe no banco.
        const EventoExistente = await prismaClient.evento.findFirst({
            where: {
                name: name
            }
        })

        if (EventoExistente) {
            throw new Error("Evento já cadastrado!")
        }




        //cadastra no banco.
        const evento= prismaClient.evento.create({
            data: {
                name: name,
                data_evento: data_evento,
                descricao: descricao,
                categoria_id: categoria_id,
                local_id: local_id
                    
                
            },
            select: {
                id: true,
                name: true,
                data_evento: true,
                descricao: true

            }
        })

        return evento;




    }
}



export { CreateEventoService }
