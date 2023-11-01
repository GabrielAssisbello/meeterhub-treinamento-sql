const ModeloContem = require('../models/modelContem.js');

class ControladorContem{
    async criarContem( req, res ){
        const Contem = req.body;
        try{
            const idContem = await ModeloContem.criarContem(Contem);
            res.status(201).json({ id: idContem});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um contem'});
        }
    }

    async obterTodosContem( req, res ){
        try{
            const contems = await ModeloContem.obterTodosContems();
            res.status(200).json(contems);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os contems'});
        }
    }

    async obterContemPorId( req, res ){
        const id = req.params.id;
        try{
            const contem = await ModeloContem.obterContemPorId(id);
            if( contem ){
                res.status(200).json(contem);
            } else {
                res.status(404).json({erro: 'contem não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o contem'});
        }
    }

    async atualizarContem( req, res ){
        const id = req.params.id;
        const contem = req.body; 
        try{
            const resultado = await ModeloContem.atualizarContem(id_carrinho, id_livro, quantidade);
            if( contem ){
                res.status(200).json({msg: 'Contem atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Contem não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Contem'});
        }
    }
    
    async excluirContem( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloContem.excluirContem(id);
            if( resultado ){
                res.status(200).json({msg: 'Contem excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Contem não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Contem'});
        }
    }

}

module.exports = new ControladorContem();