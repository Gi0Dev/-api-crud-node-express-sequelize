


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const produtoController = require('./controllers/produtoController');



//criar um novo produto
app.post('/addproduto', produtoController.criarProduto);

//listar todos os produtos
app.get('/produtos', produtoController.listarProdutos);

//listar um produto pelo id 
 app.get('/produtos/:id', produtoController.buscarProdutoId);

//buscar um produto pelo id para atualizar suas informações 
  app.put('/updateprodutos/:id', produtoController.atualizarProduto);

//buscar um produto pelo id e excluir o mesmo
app.delete('/deleteprodutos/:id', produtoController.deletarProduto);
  
  module.exports = app;
