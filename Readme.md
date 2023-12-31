# API CRUD RESTful com Node.js, Express.js e Sequelize

Esta é uma API CRUD simples que gerencia uma tabela de produtos em um banco de dados MySQL. Ela permite a criação, leitura, atualização e exclusão de produtos.

## Pré-requisitos

- Node.js
- MySQL
- Insomnia, Postman (ou qualquer cliente HTTP similar para testar a API)

## Configuração

1. Clone o repositório:

   ```shell
   git clone https://github.com/Gi0Dev/-api-crud-node-express-sequelize.git

2. Instale as dependências:

    cd api-crud-express-sequelize
    npm install express
    npm install sequelize
    npm install mysql2

3. Configure o banco de dados:

    Crie um banco de dados MySQL.
    Edite o arquivo sequelize.js e insira as informações de conexão corretas (nome do banco de dados, nome de usuário e senha).

4. Execute o servidor:

    node app.js

    A API estará rodando em http://localhost:3000.

## Endpoints:

   - POST /addproduto -Cria um novo produto. Enviar um objeto JSON no corpo da solicitação com os campos nome, descricao e preco.

   - GET /produtos -Gera uma Lista com as informações de todos os produtos.

   - GET /produtos/:id -Obtém informações de um produto específico com base no ID.

   - PUT /updateprodutos/:id -Atualiza informações de um produto específico com base no ID. Enviar um objeto JSON no corpo da solicitação com os campos que deseja atualizar.

   - DELETE /deleteprodutos/:id -Exclui um produto específico com base no ID.

## Testes:

    Crie todas as rotas (endpoints) no Insomnia, por exemplo, com os respectivos métodos HTTP (POST, GET, PUT, DELETE). Depois, basta executar a requisição.
    Exemplo de Corpo da Solicitação (JSON) para requisição POST ou PUT:
    {
        "nome": "Placa mãe",
        "descricao": "Asus Tuf B360-m plus gaming",
        "preco": 700.00
    }
    Exemplo de endpoint de requisição get para listar um produto pelo id:

    GET - localhost:3000/produtos/2 -
    resultado da solicitação: status OK (200)
    preview:
    {
        "id": 2
        "nome": "Placa mãe",
        "descricao": "Asus Tuf B360-m plus gaming",
        "preco": 700.00
    }


Contribuição
Fique à vontade para contribuir para este projeto, abrindo problemas ou enviando solicitações pull.#   - a p i - c r u d - n o d e - e x p r e s s - s e q u e l i z e 
 
 #   - a p i - c r u d - n o d e - e x p r e s s - s e q u e l i z e 
 
 # -api-crud-node-express-sequelize
# api-crud-node-express-sequelize
