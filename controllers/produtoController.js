const Produto = require('../models/produto');

Produto.sync({force: true}); //codigo para criar a tabela no banco de dados, deve ser utilizado só uma vez por tabela

exports.criarProduto = async (req, res) =>{

    try { 
      const novoProduto = await Produto.create(req.body);
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ error: 'Não foi possível criar o produto.' });
    }
};

exports.listarProdutos = async (req, res) => {

    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos.' });
      }
};

exports.buscarProdutoId = async (req, res)=>{

    const parametroid = req.params.id;
    const produto = await Produto.findByPk(parametroid)
    try{
        if (produto) {
            res.json(produto);
          } else {
            res.status(404).json({ error: 'Produto não encontrado.' });
          }
    } catch (error){
        res.status(500).json({ error: 'Erro ao obter informações do produto.' });
    }
};

exports.atualizarProduto =  async (req, res)=>{

    const parametroid = req.params.id;
    const [atualizado] = await Produto.update(req.body, { where: {id: parametroid } });
    
    try{
        if (atualizado) {
            res.json({ message: 'Produto atualizado com sucesso.' });
          } else {
            res.status(404).json({ error: 'Produto não encontrado.' });
          }
    } catch (error){
        res.status(500).json({ error: 'Erro ao atualizar informações do produto.' });
    }
    
};

exports.deletarProduto = async (req, res)=>{

    const parametroid = req.params.id;
    const deletado = await Produto.destroy({ where: {id: parametroid } });

  try{
        if (deletado) {
            res.json({ message: 'Produto excluído com sucesso.' });
        } else {
            res.status(404).json({ error: 'Produto não encontrado.' });
        }
  } catch (error){
    res.status(500).json({ error: 'Erro ao excluir o produto.' });
  }
  

};
