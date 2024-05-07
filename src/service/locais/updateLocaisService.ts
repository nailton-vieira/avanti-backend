import prismaClient from "../../prisma";

interface Props{ id: string; 
                espaco_name: string;
                endereco: string;
                setor: string;
                cidade: string;
                estado: string; }

class UpdateLocaisService { 
    async execute ({ id, espaco_name, endereco, setor, cidade, estado } :Props) { 
        if (espaco_name == "" || endereco == "" || setor == "" || cidade == "" || estado == "") {
            throw new Error("Preencha todos os campos");
        }
        const local = await prismaClient.local.update({ 
            where:{id}, 
            data:{espaco_name, endereco, setor, cidade, estado},
            select:{id:true, espaco_name:true}})

        return local;
    }
}

export { UpdateLocaisService };
