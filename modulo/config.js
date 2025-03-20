/**********************************************************************************************************************************************************************************
 * Objetivo: Arquivo de configuração do projeto, onde teremos mensagens padronizadas, variaveis e constantes para o projeto 
 * Data: 13/02/2025
 * Autor: Kauan Rodrigues 
 * Versões: 1.0
 * 
 ***********************************************************************************************************************************************************************************/

/************************************************MENSAGENS DE STATUS CODE PARA API**************************************************************************************************
 ************************************************MENSAGENS DE ERRO******************************************************************************************************************/

/***************MENSAGENS DE ERROS ****************/
const ERROR_REQUIRE_FIELDS = {status: false, status_code: 400, message: 'Existem campos com preenchimento obrigatórios e não foram encaminhados!!!'}
const ERROR_INTERNAL_SERVER_MODEL = {status: false, status_code: 500, message: 'Devido a um erro interno no servidor de modelagem de dados, não doi possivel processar a requisição!!!'}
const ERROR_INTERNAL_SERVER_CONTROLLER = {status: false, status_code: 500, message: 'Devido ao erro interno no servidor de controle de dados, não foi possivel processar a requisição!!!'}
const ERRO_CONTENT_TYPE = {status: false, status_code: 415, message: 'Não foi possível a requisição, pois os tipos de dados enviados não foram aceitos na API. Vôce deve encaminhar apenas JSON '}
const ERRO_NOT_FOUND = {status: false, status_code: 404, message: 'Não foram encontrados itens para retorno '}
/***************MENSAGENS DE SUCESSO ****************/

const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Iem criado comsuceso!!!'}
const SUCCESS_DELETE_ITEM = {status: true, status_code: 200, message: 'Iem excluído comsuceso!!!'}
const SUCCESS_UPDATED_ITEM = {status: true, status_code: 200, message: 'Iem atualizado comsuceso!!!'}
module.exports = {
    ERROR_REQUIRE_FIELDS,
    ERROR_INTERNAL_SERVER_MODEL,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERRO_CONTENT_TYPE,
    ERRO_NOT_FOUND,
    SUCCESS_DELETE_ITEM,
    SUCCESS_UPDATED_ITEM
}