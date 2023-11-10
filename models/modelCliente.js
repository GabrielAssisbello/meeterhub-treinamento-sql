const pool = require('../pool')

class ModeloCliente{
    
    async criarCliente(cliente) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_cliente (email, nome_cliente, endereco, telefone) values(?, ?, ?, ?)',
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

    async obterClientePorId(id_cliente) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_cliente where id_cliente = ?',
                [id_cliente]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarCliente(id_cliente, cliente) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_cliente set email = ?,nome_cliente = ?, endereco = ?, telefone = ? where id_cliente = ?',
                [cliente.email, cliente.nome_cliente, cliente.endereco, cliente.telefone, id_cliente]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCliente(id_cliente) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_cliente where id_cliente = ?',
                [id_cliente]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloCliente();