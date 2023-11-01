const ModeloCarrinho = require('../models/modelCarrinho.js');

class ControladorCarrinho{
    async criarCarrinho( req, res ){
        const Carrinho = req.body;
        try{
            const idCarrinho= await ModeloCarrinho.criarCarrinho(Carrinho);
            res.status(201).json({ id: idCarrinho});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um carrinho'});
        }
    }

    async obterTodosCarrinhos( req, res ){
        try{
            const carrinhos = await ModeloCarrinho.obterTodosCarrinhos();
            res.status(200).json(carrinhos);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os carrinhos'});
        }
    }

    async obterCarrinhoPorId( req, res ){
        const id = req.params.id;
        try{
            const carrinho = await ModeloCarrinho.obterCarrinhoPorId(id);
            if( carrinho ){
                res.status(200).json(armazenamento);
            } else {
                res.status(404).json({erro: 'carrinho não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o carrinho'});
        }
    }

    async atualizarCarrinho( req, res ){
        const id = req.params.id;
        const carrinho = req.body; 
        try{
            const resultado = await ModeloCarrinho.atualizarCarrinho(id_carrinho, id_cliente);
            if( resultado ){
                res.status(200).json({msg: 'Carrinho atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Carrinho não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Carrinho'});
        }
    }
    
    async excluirCarrinho( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloCarrinho.excluirCarrinho(id);
            if( resultado ){
                res.status(200).json({msg: 'Carrinho excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Carrinho não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Carrinho'});
        }
    }

}

module.exports = new ControladorCarrinho();