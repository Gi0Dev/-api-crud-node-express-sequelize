
const Produto = require('./models/produto');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

 Produto.sync({force: true}); //codigo para criar a tabela no banco de dados, deve ser utilizado só uma vez por tabela

//criar um novo produto
app.post('/addproduto', async (req, res) => {
    try {
        console.log('Corpo da solicitação:', req.body);
      const novoProduto = await Produto.create(req.body);
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ error: 'Não foi possível criar o produto.' });
    }
  });

//listar todos os produtos
app.get('/produtos', async (req, res) => {

    try {
      const produtos = await Produto.findAll();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos.' });
    }
  });

//listar um produto pelo id 
 app.get('/produtos/:id', async (req, res) => {

    const parametroid = req.params.id;
    const produto = await Produto.findByPk(parametroid)
    
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }

  });

//buscar um produto pelo id para atualizar suas informações 
  app.put('/updateprodutos/:id', async (req, res) => {

    const parametroid = req.params.id;
    const [atualizado] = await Produto.update(req.body, { where: {id: parametroid } });
  
    if (atualizado) {
      res.json({ message: 'Produto atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  }); 

//buscar um produto pelo id e excluir o mesmo
app.delete('/deleteprodutos/:id', async (req, res) => {

      const parametroid = req.params.id;
      const deletado = await Produto.destroy({ where: {id: parametroid } });
     
    if (deletado) {
      res.json({ message: 'Produto excluído com sucesso.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }

  });
  
  module.exports = app;
