const mysql = require('mysql2/promise');

class ModeloArmazenamento{
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'gabriel',
            database:'db_cliente',
        });
    }

    async criarArmazenamento(autor) {
        const connection = await this.pool.getConnection();
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
        const connection = await this.pool.getConnection();
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
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_armazenamento where id = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarArmazenamento(id, cliente) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'update tb_autor set id.livro = ? , id_deposito = ? where id = ?',
                [armazenamento.id.livro, armazenamento.id_deposito]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirArmazenamento(id) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'delete from tb_armazenamento where id = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloArmazenamento();