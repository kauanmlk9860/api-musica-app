/**********************************************************************************************************************************************************************************
 * Objetivo: API resposável pelas requisições do projeto de controle música
 * Data: 13/02/2025
 * Autor: Kauan Rodrigues 
 * Versões: 1.0
 * Observações:
 * ************ Para criar a API preisamos instalar:
 *              express   npm install express --save
 *              cors        npm install cors --save
 *              body-parser npm install body-parser --save
 * ************* Para criar conexão com o banco de dados MYSQL precisamos instalar:
 *               prisma        npm install prisma --save
 *               prisma/client npm install @prisma/client --save
 * 
 * Após a instalação do prisma é nescessário inicializar o prisma:
 *             npx prisma init 
 * Para sincronização o prisma com o banco de dados podemos utilizar:
 *             npx prisma migrate dev 
 ***********************************************************************************************************************************************************************************/

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria o o objeto app para criar a API
const app = express

app.request((request, response, next)=>{

    response.header('Allow-Control-Allow-Origin', '*')
    response.header('Allow-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.request(cors())
    next()
})

//EndPoint para inserir uma música 
app.post('/v1/controle-musicas', cors(), async function (request, response){
    
})

    

