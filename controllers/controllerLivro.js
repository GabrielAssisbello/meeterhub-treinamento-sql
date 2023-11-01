const ModeloLivro = require('../models/modelLivro.js');


class ControladorLivro{
    async criarLivro( req, res ){
        const livro = req.body;
        try{
            const idLivro = await ModeloLivro.criarlivro(livro);
            res.status(201).json({ id: idLivro});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um livro'});
        }
    }
   

    async obterTodosLivros( req, res ){
        try{
            const livro = await ModeloEditora.obterTodosLivros();
            res.status(200).json(livros);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os livros'});
        }
    }

    async obterLivroPorId( req, res ){
        const id = req.params.id;
        try{
            const livro = await ModeloLivro.obterLivroPorId(id);
            if( livro ){
                res.status(200).json(livro);
            } else {
                res.status(404).json({erro: 'livro não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o livro'});
        }
    }

    async atualizarLivro( req, res ){
        const id = req.params.id;
        const livro = req.body; 
        try{
            const resultado = await ModeloLivro.atualizarLivro(id, livro);
            if( resultado ){
                res.status(200).json({msg: 'Livro atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Livro não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar Livro'});
        }
    }
    
    async excluirLivro( req, res ){
        const id = req.params.id;
        try{
            const resultado = await ModeloLivro.excluirLivro(id);
            if( resultado ){
                res.status(200).json({msg: 'Livro excluida com sucesso'});
            } else {
                res.status(404).json({erro: 'Livro não encontrada'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir Livro'});
        }
    }

}

module.exports = new ControladorLivro();