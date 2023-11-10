const mysql = require('mysql2/promise');

class ModeloEditora{
  
    async criarEditora(editora) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into tb_editora (id_editora, endereco, telefone, url) values(?, ?, ?, ?)',
                [editora.editora_id, editora.endereco, editora_telefone, editora_url]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosEditoras() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_editora'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterEditoraPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from tb_editora where id_editora = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarEditora(id, editora) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update tb_editora set editora_id = ?, endereco = ?,telefone = ?, url = ? where id = ?',
                [editora.editora_id, editora.endereco, editora_telefone, editora_url, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirEditora(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from tb_editora where id_editora = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloEditora();