const mysql = require('mysql2/promise');
const pool = require('../pool')

class ModeloCliente{
    
    async criarCliente(cliente) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_cliente (id_cliente, email, nome_cliente, endereco, telefone) values(?, ?, ?, ?, ?)',
                [cliente.email, cliente.nome_cliente, cliente.endereco, cliente.telefone]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosClientes() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_cliente'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterClientePorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_cliente where id_cliente = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarCliente(id, cliente) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_cliente set email = ?,nome_cliente = ?, endereco = ?, telefone = ? where id = ?',
                [cliente.email, cliente.nome_cliente, cliente.endereco, cliente.telefone, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCliente(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_cliente where id_cliente = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloCliente();