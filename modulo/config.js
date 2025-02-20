/**********************************************************************************************************************************************************************************
 * Objetivo: Arquivo de configuração do projeto, onde teremos mensagens padronizadas, variaveis e constantes para o projeto 
 * Data: 13/02/2025
 * Autor: Kauan Rodrigues 
 * Versões: 1.0
 * 
 ***********************************************************************************************************************************************************************************/

/************************************************MENSAGENS DE STATUS CODE PARA API**************************************************************************************************
 ************************************************MENSAGENS DE ERRO******************************************************************************************************************/

const ERROR_REQUIRE_FIELDS = {status: false, status_code: 400, message: 'Existem campos com o preenchimentos obrigatórios que não foram encontrar.'}
const ERROR_INTERNAL_SERVER = {status: false, status_code: 500, message: 'Devido o erro interno no servidor, não foi possiveel realizar a requisição.'}

/*****************************************************MENSAGENS DE SUCESSO****************************************************************************************************************** */

const SUCCESS_CREATED_ITEM = {status: true,status_code: 201, message: 'Item criado com sucesso!!!' }



module.exports = {
    ERROR_REQUIRE_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM


}