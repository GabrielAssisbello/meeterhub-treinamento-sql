const pool = require('../pool')

class ModeloAutor{

    async criarAutor(autor) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_autor (nome_autor, endereco, url, id_editora) values(?, ?, ?, ?)',
                [autor.nome, autor.endereco, autor.url, autor.id_editora]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosAutores() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_autor'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterAutorPorId(id_autor) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_autor where id_autor = ?',
                [id_autor]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarAutor(id_autor, autor) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_autor set nome_autor = ?, endereco = ?, URL = ?, id_editora = ? where id_autor = ?',
                [autor.nome_autor, autor.endereco, autor.url, autor.id_editora, id_autor]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirAutor(id_autor) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_autor where id_autor = ?',
                [id_autor]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloAutor();