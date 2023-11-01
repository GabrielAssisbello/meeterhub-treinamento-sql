const ModeloDeposito = require('../models/modelDeposito.js');

class ControladorDeposito{
    async criarDeposito( req, res ){
        const Deposito = req.body;
        try{
            const idDeposito = await ModeloDeposito.criarDeposito(Deposito);
            res.status(201).json({ id: idDeposito});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um deposito'});
        }
    }

    async obterTodosDepositos( req, res ){
        try{
            const depositos = await ModeloDeposito.obterTodosDepositos();
            res.status(200).json(depositos);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os depositos'});
        }
    }

    async obterDepositoPorId( req, res ){
        const id = req.params.id;
        try{
            const deposito = await ModeloDeposito.obterDepositoPorId(id);
            if( deposito ){
                res.status(200).json(deposito);
            } else {
                res.status(404).json({erro: 'deposito não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o deposito'});
        }
    }

    async atualizarDeposito( req, res ){
        const id = req.params.id;
        const deposito = req.body; 
        try{
            const resultado = await ModeloDeposito.atualizarDeposito(id_deposito, endereco, telefone, id_livro);
            if( resultado ){
                res.status(200).json({msg: 'Deposito atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Deposito não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Deposito'});
        }
    }
    
    async excluirDeposito( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloDeposito.excluirDeposito(id);
            if( resultado ){
                res.status(200).json({msg: 'Deposito excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Deposito não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Deposito'});
        }
    }

}

module.exports = new ControladorDeposito();