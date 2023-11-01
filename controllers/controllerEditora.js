const ModeloEditora = require('../models/modelCliente.js');


class ControladorEditora{
    async criarEditora( req, res ){
        const editora = req.body;
        try{
            const idEditora = await ModeloEditora.criarEditora(editora);
            res.status(201).json({ id: idEditora});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar uma editora'});
        }
    }
   

    async obterTodosEditora( req, res ){
        try{
            const editora = await ModeloEditora.obterTodosEditoras();
            res.status(200).json(editoras);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todas as editoras'});
        }
    }

    async obterEditoraPorId( req, res ){
        const id = req.params.id;
        try{
            const editora = await ModeloEditora.obterEditoraPorId(id);
            if( editora ){
                res.status(200).json(editora);
            } else {
                res.status(404).json({erro: 'editora não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar a editora'});
        }
    }

    async atualizarEditora( req, res ){
        const id = req.params.id;
        const editora = req.body; 
        try{
            const resultado = await ModeloEditora.atualizarEditora(id, editora);
            if( resultado ){
                res.status(200).json({msg: 'Editora atualizada com sucesso'});
            } else {
                res.status(404).json({erro: 'Editora não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Editora'});
        }
    }
    
    async excluirEditora( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloEditora.excluirEditora(id);
            if( resultado ){
                res.status(200).json({msg: 'Editora excluida com sucesso'});
            } else {
                res.status(404).json({erro: 'Editora não encontrada'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Editora'});
        }
    }

}

module.exports = new ControladorEditora();