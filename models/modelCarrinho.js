const mysql = require('mysql2/promise');

class ModeloCarrinho{
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'gabriel',
            database:'db_cliente',
        });
    }

    async criarCarrinho(autor) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_armazenamenti (id_carrinho, id_cliente) values(?, ?)',
                [carrinho.id_carrinho, carrinho.id_cliente]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosCarrinho() {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_carrinho'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterCarrinhoPorId(id) {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_carrinho where id = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarCarrinho(id, cliente) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'update tb_autor set id.carrinho = ? , id_cliente = ? where id = ?',
                [carrinho.id_carrinho, carrinho.id_cliente]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCarrinho(id) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'delete from tb_carrinho where id = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloCarrinho();