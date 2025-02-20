/*

* Objetivo: Model responsável pelo CRUD de dados de música no Banco de Dados 
* Data: 13/02/25
* Autor: Kauan 
* Versão: 1.0
*/

const { PrismaClient } = require('@prisma/client')


//Função para inserir uma nova música no banco de dados
const insertMusica =  async function(musica){
    try{

    

//Instanciando (criar um novo objeto) para realizar a manipulação do script SQL
const prisma = new PrismaClient

let sql = `insert into tbl_musica(nome, 
                                  link,
                                  duracao,
                                  data_lancamento,
                                  foto_capa,
                                  letra
                                )                                  
                        values  (
                                    '${musica.nome}',
                                    '${musica.link}',
                                    '${musica.duracao}',
                                    '${musica.data_lancamento}',
                                    '${musica.foto_capa}',
                                    '${musica.letra}'

                               )`

//Executa o script SQL no BD e aguarda o retorno do BD 
let result = await prisma.$executeRawUnsafe(sql)

if (result)
        return true
    else
        return false

}catch (error){
     return false 
}
        

}

//Função para atualizar uma música existente no banco de dados 
const updateMusica = async function(){

}

//Função para excluir uma música existente no banco de dados 
const deleteMusica = async function(){

}

//Função para retornar todas as músicas do banco de dados 
const selectAllMusica = async function(){

}


//Função para buscar uma música pelo id no banco de dados 
const selectByIdMusica = async function(){

}

module.exports = {
    insertMusica,
    updateMusica,
    deleteMusica,
    selectAllMusica,
    selectByIdMusica
}