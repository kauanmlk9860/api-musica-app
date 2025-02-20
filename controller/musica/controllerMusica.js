/**********************************************************************************************************************************************************************************
 * Objetivo: Controller responsável pela manipulação do CRUD de dados de música 
 * Data: 13/02/2025
 * Autor: Kauan Rodrigues 
 * Versões: 1.0
 ***********************************************************************************************************************************************************************************/

const MESSAGE = require('../../modulo/config')

const musicaDAO = require('../../model/DAO/musica')
     
try{

  

    

//Função para inserir uma música
const inserirMusica = async function (musica){
if  (  musica.nome            == undefined || musica.nome == ''             || musica.nome == null            || musica.nome.length > 80            ||
       musica.link            == undefined || musica.link == ''             || musica.link == null            || musica.link.length > 200           ||
       musica.duracao         == undefined || musica.duracao == ''          || musica.duracao == null         || musica.duracao.length > 5          ||
       musica.data_lancamento == undefined || musica.data_lancamento == ''  || musica.data_lancamento == null || musica.data_lancamento.length > 200||
       musica.foto_capa  == undefined || musica.foto_capa.length > 200                                                                         ||
       musica.letra           == undefined
    ){
        return MESSAGE.ERROR_REQUIRE_FIELDS
    }else{
        let resultMusica = await musicaDAO.insertMusica(musica)

        if(resultMusica)
            return MESSAGE.SUCCESS_CREATED_ITEM //201
        else
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
    }
} catch (error){
    return MESSAGE.ERROR_INTERNAL_CONTROLLER
}
   
}


//Função para atualizar uma música
const AtualizarMusica = async function (){

}



//Função para excluir uma música
const excluirMusica = async function (){

}

//Função para retornar uma música
const listarMusica = async function (){

}

//Função para buscar uma música pelo ID 
const buscarMusica = async function (){

}


module.exports = {
    inserirMusica,
    AtualizarMusica,
    excluirMusica,
    listarMusica,
    buscarMusica
}