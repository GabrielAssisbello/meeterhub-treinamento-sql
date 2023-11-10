const mysql = require('mysql2/promise');

class ModeloArmazenamento{
   
    async criarArmazenamento(armazenamento) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_armazenamento (id.livro, id_deposito) values(?, ?)',
                [armazenamento.id.livro, armazenamento.id_deposito]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosArmazenamento() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_armazenamento'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterArmazenamentoPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_armazenamento where id_armazenamento = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarArmazenamento(id, armazenamento) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_armazenamento set id.livro = ? , id_deposito = ? where id = ?',
                [armazenamento.id.livro, armazenamento.id_deposito, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirArmazenamento(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_armazenamento where id_armazenamento = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloArmazenamento();