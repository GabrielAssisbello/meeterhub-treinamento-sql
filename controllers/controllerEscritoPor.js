const ModeloEscritoPor = require('../models/modelEscritoPor.js');

class ControladorEscritoPor{
    async criarEscritoPor( req, res ){
        const EscritoPor = req.body;
        try{
            const idEscritoPor= await ModeloEscritoPor.criarEscritoPor(EscritoPor);
            res.status(201).json({ id: idEscritoPor});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um Escrito Por '});
        }
    }

    async obterTodosArmazenamentos( req, res ){
        try{
            const EscritoPors = await ModeloEscritoPor.obterTodosEscritoPors();
            res.status(200).json(EscritoPors);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os Escrito Pors'});
        }
    }

    async obterEscritoPorPorId( req, res ){
        const id = req.params.id;
        try{
            const escritopor = await ModeloEscritoPor.obterEscritoPorPorId(id);
            if( escritopor ){
                res.status(200).json(armazenamento);
            } else {
                res.status(404).json({erro: 'Escrito Por não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o armazenamento'});
        }
    }

    async atualizarEscritoPor( req, res ){
        const id = req.params.id;
        const escritopor = req.body; 
        try{
            const resultado = await ModeloEscritoPor.atualizarEscritoPor(id_livro, id_autor);
            if( resultado ){
                res.status(200).json({msg: 'Escrito Por atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Escrito Por não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Escrito Por'});
        }
    }
    
    async excluirEscritoPor( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloEscritoPor.excluirEscritoPor(id);
            if( resultado ){
                res.status(200).json({msg: 'Escrito Por excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Escrito Por não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Escrito Por'});
        }
    }

}

module.exports = new ControladorEscritoPor();