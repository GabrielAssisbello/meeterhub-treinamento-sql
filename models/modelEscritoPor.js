const pool = require('../pool')

class ModeloEscritoPor{
   
    async criarEscritoPor(escrito_por) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_escrito_por (id_livro, id_autor) values(?, ?)',
                [escrito_por.id_livro, escrito_por.id_autor, autor.id]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosEscritoPor() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_escrito_por'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterEscritoPorPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_escrito_por where id_escrito_por = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarEscrito_por(id, escrito_por) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_autor set id.livro = ? , id_autor = ? where id_escrito_por = ?',
                [escrito_por.id_livro, escrito_por.id_autor, autor.id, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirEscritoPor(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_escrito_por where id_escrito_por = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloEscritoPor();