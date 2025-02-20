/**********************************************************************************************************************************************************************************
 * Objetivo: API responsável pelas requisições do projeto de controle música
 * Data: 13/02/2025
 * Autor: Kauan Rodrigues 
 * Versões: 1.0
 * Observações:
 * ************ Para criar a API precisamos instalar:
 *              express   npm install express --save
 *              cors        npm install cors --save
 *              body-parser npm install body-parser --save
 * ************* Para criar conexão com o banco de dados MYSQL precisamos instalar:
 *               prisma        npm install prisma --save
 *               prisma/client npm install @prisma/client --save
 * 
 * Após a instalação do prisma é necessário inicializar o prisma:
 *             npx prisma init 
 * Para sincronização do prisma com o banco de dados podemos utilizar:
 *             npx prisma migrate dev 
 ***********************************************************************************************************************************************************************************/

// Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import das controllers do projeto
const controllerMusica = require('./controller/musica/controllerMusica')

// Criando o formato de dados que será recebido no body na requisição (POST/PUT)
const bodyParserJson = bodyParser.json()

// Cria o objeto app para criar a API
const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    next()
})

// EndPoint para inserir uma música 
app.post('/v1/controle-musicas/musica', cors(), bodyParserJson, async function (request, response) {
    // Recebe os dados encaminhados via body
    let dadosBody = request.body 
    let result = await controllerMusica.inserirMusica(dadosBody)

    response.status(result.status_code)
    response.json(result)
})

app.listen(8080, function() {
    console.log('Servidor aguardando novas requisições')
})
