const pool = require('../pool')

class ModeloContem{

    async criarContem(contem) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_contem (id_carrinho, id_livro, quantidade) values(?, ?, ?)',
                [contem.id_carrinho, contem.id_livro, contem.quantidade]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosContem() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_contem'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterContemPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_contem where id_contem = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarContem(id, contem) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_contem set id_carrinho = ?, id_livro = ?, quantidade = ? where id_contem = ?',
                [contem.id_carrinho, contem.id_livro, contem.quantidade, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirContem(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_contem where id_contem = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloContem();