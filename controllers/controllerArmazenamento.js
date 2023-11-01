const ModeloArmazenamento = require('../models/modelArmazenamento.js');

class ControladorArmazenamento{
    async criarArmazenamento( req, res ){
        const Armazenamento = req.body;
        try{
            const idArmazenamento= await ModeloArmazenamento.criarArmazenamento(Armazenamento);
            res.status(201).json({ id: idArmazenamento});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um armazenamento'});
        }
    }

    async obterTodosArmazenamentos( req, res ){
        try{
            const armazenamentos = await ModeloArmazenamento.obterTodosArmazenamentos();
            res.status(200).json(armazenamentos);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os armazenamentos'});
        }
    }

    async obterArmazenamentoPorId( req, res ){
        const id = req.params.id;
        try{
            const armazenamento = await ModeloArmazenamento.obterArmazenamentoPorId(id);
            if( armazenamento ){
                res.status(200).json(armazenamento);
            } else {
                res.status(404).json({erro: 'Armazenamento não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o armazenamento'});
        }
    }

    async atualizarArmazenamento( req, res ){
        const id = req.params.id;
        const armazenamento = req.body; 
        try{
            const resultado = await ModeloAutor.atualizarArmanezamento(id_livro, id_deposito);
            if( resultado ){
                res.status(200).json({msg: 'Armazenamento atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Armazenamento não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Armazenamento'});
        }
    }
    
    async excluirArmazenamento( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloAutor.excluirArmazenamento(id);
            if( resultado ){
                res.status(200).json({msg: 'Armazenamento excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Armazenamento não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Armazenamento'});
        }
    }

}

module.exports = new ControladorArmazenamento();