const mysql = require('mysql2/promise');

class ModeloDeposito{
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'gabriel',
            database:'db_cliente',
        });
    }

    async criarDeposito(deposito) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_deposito (id_deposito, endereco, telefone, id_livro) values(?, ?, ?, ?)',
                [deposito.id_deposito, deposito.endereco, deposito.telefone, deposito.id_livro]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosDeposito() {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_deposito'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterDepositoPorId(id) {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_deposito where id = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarDeposito(id, deposito) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'update tb_autor set id_deposito = ? , endereco = ? , telefone = ? , id_livro = ? where id = ?',
                [deposito.id_deposito, deposito.endereco, deposito.telefone, deposito.id_livro]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirDeposito(id) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'delete from tb_deposito where id = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloDeposito();