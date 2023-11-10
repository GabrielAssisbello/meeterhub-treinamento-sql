const mysql = require('mysql2/promise');
const pool = require('../pool')

class ModeloCarrinho{

    async criarCarrinho(carrinho) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_carrinho (id_carrinho, id_cliente) values(?, ?)',
                [carrinho.id_carrinho, carrinho.id_cliente]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosCarrinho() {
        const connection = await pool.getConnection();
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
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_carrinho where id_carrinho = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarCarrinho(id, carrinho) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_carrinho set id.carrinho = ? , id_cliente = ? where id = ?',
                [carrinho.id_carrinho, carrinho.id_cliente, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCarrinho(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_carrinho where id_carrinho = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloCarrinho();