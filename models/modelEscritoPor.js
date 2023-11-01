const mysql = require('mysql2/promise');

class ModeloEscritoPor{
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'gabriel',
            database:'db_cliente',
        });
    }

    async criarEscritoPor(autor) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_escrito_por (id_livro, id_autor) values(?, ?)',
                [escrito_por.id_livro, escrito_por.id_autor]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosEscritoPor() {
        const connection = await this.pool.getConnection();
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
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_escrito_por where id = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarEscrito_por(id, autor) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'update tb_autor set id.livro = ? , id_autor = ? where id = ?',
                [escrito_por.id_livro, escrito_por.id_autor]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirEscritoPor(id) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'delete from tb_escrito_por where id = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloEscritoPor();